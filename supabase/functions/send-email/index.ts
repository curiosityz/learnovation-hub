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

  let client: SmtpClient | null = null;

  try {
    console.log('Initializing SMTP client...');
    client = new SmtpClient();

    console.log('Connecting to ZeptoMail SMTP server...');
    await client.connectTLS({
      hostname: "smtp.zeptomail.com",
      port: 587,
      username: "emailapikey",
      password: ZEPTOMAIL_PASSWORD,
      tls: true,
    });
    console.log('Connected to ZeptoMail SMTP server successfully');

    const { type, email, name, message } = await req.json();
    console.log('Processing request for email type:', type);
    
    let emailContent;
    let subject;
    
    if (type === 'subscription') {
      subject = "New Newsletter Subscription";
      emailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>New Newsletter Subscription</h1>
    <p>A new user has subscribed to the newsletter:</p>
    <p><strong>Email:</strong> ${email}</p>
  </body>
</html>`;
    } else if (type === 'contact') {
      subject = "New Contact Form Submission";
      emailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
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

    console.log('Preparing to send email via ZeptoMail...');
    const emailConfig = {
      from: "noreply@teachoneself.com",
      to: "z@teachoneself.com",
      subject: subject,
      html: emailContent,
    };
    console.log('Email configuration prepared:', { ...emailConfig, html: '[HTML Content]' });

    console.log('Sending email through ZeptoMail...');
    await client.send(emailConfig);
    console.log('Email sent successfully via ZeptoMail');

    if (client) {
      console.log('Closing ZeptoMail SMTP connection...');
      await client.close();
      console.log('ZeptoMail SMTP connection closed successfully');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error('ZeptoMail email sending error:', error);
    
    if (client) {
      try {
        console.log('Attempting to close ZeptoMail SMTP connection after error...');
        await client.close();
        console.log('ZeptoMail SMTP connection closed successfully after error');
      } catch (closeError) {
        console.error('Error closing ZeptoMail SMTP connection:', closeError);
      }
    }

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
  }
});