import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const ZEPTOMAIL_PASSWORD = Deno.env.get('ZEPTOMAIL_PASSWORD') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const client = new SmtpClient();

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    await client.connectTLS({
      hostname: "smtp.zeptomail.com",
      port: 587,
      username: "emailapikey",
      password: ZEPTOMAIL_PASSWORD,
    });

    const { type, email, name, message } = await req.json();
    
    let emailContent;
    let subject;
    
    if (type === 'subscription') {
      subject = "New Newsletter Subscription";
      emailContent = `
        <h1>New Newsletter Subscription</h1>
        <p>A new user has subscribed to the newsletter:</p>
        <p>Email: ${email}</p>
      `;
    } else if (type === 'contact') {
      subject = "New Contact Form Submission";
      emailContent = `
        <h1>New Contact Form Submission</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      `;
    } else {
      throw new Error('Invalid email type');
    }

    await client.send({
      from: "noreply@teachoneself.com",
      to: "z@teachoneself.com",
      subject: subject,
      content: emailContent,
      html: emailContent,
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    if (client) {
      try {
        await client.close();
      } catch (closeError) {
        console.error('Error closing SMTP connection:', closeError);
      }
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