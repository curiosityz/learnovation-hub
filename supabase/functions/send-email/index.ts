import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const ZEPTOMAIL_PASSWORD = Deno.env.get('ZEPTOMAIL_PASSWORD') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204
    });
  }

  let client: SmtpClient | null = null;

  try {
    if (!ZEPTOMAIL_PASSWORD) {
      console.error('ZEPTOMAIL_PASSWORD environment variable is not set');
      throw new Error('ZEPTOMAIL_PASSWORD environment variable is not set');
    }

    const { type, email, name, message } = await req.json();
    console.log('Processing request for email type:', type);
    
    let emailContent;
    let subject;
    
    if (type === 'subscription') {
      subject = "New Newsletter Subscription";
      emailContent = `
        <html>
          <body>
            <h1>New Newsletter Subscription</h1>
            <p>A new user has subscribed to the newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
          </body>
        </html>`;
    } else if (type === 'contact') {
      subject = "New Contact Form Submission";
      emailContent = `
        <html>
          <body>
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </body>
        </html>`;
    } else {
      throw new Error('Invalid email type');
    }

    console.log('Initializing SMTP client...');
    client = new SmtpClient();

    const config = {
      hostname: "smtp.zeptomail.com",
      port: 587,
      username: "emailapikey",
      password: ZEPTOMAIL_PASSWORD,
      tls: true,
      timeout: 30000, // 30 second timeout
    };
    
    console.log('Connecting to SMTP server...');
    await client.connectTLS(config);
    console.log('SMTP connection established');

    console.log('Preparing to send email...');
    const emailConfig = {
      from: "noreply@teachoneself.com",
      to: "z@teachoneself.com",
      subject: subject,
      content: emailContent,
      html: true,
    };

    console.log('Sending email...');
    await client.send(emailConfig);
    console.log('Email sent successfully');

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error details:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  } finally {
    if (client) {
      try {
        console.log('Closing SMTP connection...');
        await client.close();
        console.log('SMTP connection closed');
      } catch (closeError) {
        console.error('Error closing SMTP connection:', closeError);
      }
    }
  }
});