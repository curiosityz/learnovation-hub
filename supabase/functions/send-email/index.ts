import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ZEPTOMAIL_API_URL = "https://api.zeptomail.com/v1.1/email";
const ZEPTOMAIL_TOKEN = Deno.env.get('ZEPTOMAIL_TOKEN') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204
    });
  }

  try {
    if (!ZEPTOMAIL_TOKEN) {
      console.error('ZEPTOMAIL_TOKEN environment variable is not set');
      throw new Error('ZEPTOMAIL_TOKEN environment variable is not set');
    }

    const { type, email, name, message } = await req.json();
    console.log('Processing request for email type:', type);
    
    let emailContent;
    let subject;
    
    if (type === 'subscription') {
      subject = "New Newsletter Subscription";
      emailContent = `
        <div>
          <h1>New Newsletter Subscription</h1>
          <p>A new user has subscribed to the newsletter:</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>`;
    } else if (type === 'contact') {
      subject = "New Contact Form Submission";
      emailContent = `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>`;
    } else {
      throw new Error('Invalid email type');
    }

    const payload = {
      from: { 
        address: "noreply@teachoneself.com"
      },
      to: [{
        email_address: {
          address: "z@teachoneself.com",
          name: "Zachary"
        }
      }],
      subject: subject,
      htmlbody: emailContent
    };

    console.log('Sending email to ZeptoMail API...');
    const response = await fetch(ZEPTOMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Zoho-enczapikey ${ZEPTOMAIL_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ZeptoMail API error:', errorText);
      throw new Error(`ZeptoMail API error: ${errorText}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return new Response(
      JSON.stringify({ success: true, result }),
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
  }
});