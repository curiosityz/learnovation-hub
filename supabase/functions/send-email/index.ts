import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const ZEPTOMAIL_PASSWORD = Deno.env.get('ZEPTOMAIL_PASSWORD') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const client = new SmtpClient();

  try {
    console.log('Connecting to SMTP server...');
    await client.connectTLS({
      hostname: "smtp.zeptomail.com",
      port: 587,
      username: "emailapikey",
      password: ZEPTOMAIL_PASSWORD,
    });
    console.log('Connected to SMTP server successfully');

    const { type, email, name, message } = await req.json();
    console.log('Received request data:', { type, email, name });
    
    let emailContent;
    let subject;
    
    if (type === 'subscription') {
      subject = "New Newsletter Subscription";
      emailContent = `
        <html>
          <body>
            <h1>New Newsletter Subscription</h1>
            <p>A new user has subscribed to the newsletter:</p>
            <p>Email: ${email}</p>
          </body>
        </html>
      `;
    } else if (type === 'contact') {
      subject = "New Contact Form Submission";
      emailContent = `
        <html>
          <body>
            <h1>New Contact Form Submission</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message:</p>
            <p>${message}</p>
          </body>
        </html>
      `;
    } else {
      throw new Error('Invalid email type');
    }

    console.log('Sending email...');
    await client.send({
      from: "noreply@teachoneself.com",
      to: "z@teachoneself.com",
      subject: subject,
      html: emailContent,
    });
    console.log('Email sent successfully');

    await client.close();
    console.log('SMTP connection closed');

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    
    try {
      await client.close();
      console.log('SMTP connection closed after error');
    } catch (closeError) {
      console.error('Error closing SMTP connection:', closeError);
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});