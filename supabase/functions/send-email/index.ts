import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SendMailClient } from "npm:zeptomail";

const ZEPTOMAIL_TOKEN = Deno.env.get('ZEPTOMAIL_TOKEN');
const ZEPTOMAIL_API_URL = "api.zeptomail.com/";

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

  try {
    if (!ZEPTOMAIL_TOKEN) {
      console.error('ZEPTOMAIL_TOKEN environment variable is not set');
      throw new Error('ZEPTOMAIL_TOKEN environment variable is not set');
    }

    const { type, email, name, message } = await req.json();
    console.log('Processing request for email type:', type);
    
    const client = new SendMailClient({
      url: ZEPTOMAIL_API_URL,
      token: ZEPTOMAIL_TOKEN
    });
    
    let emailPayload;
    
    if (type === 'subscription') {
      emailPayload = {
        from: {
          address: "noreply@teachoneself.com",
          name: "Teach Oneself"
        },
        to: [{
          email_address: {
            address: "z@teachoneself.com",
            name: "Zachary"
          }
        }],
        subject: "New Newsletter Subscription",
        htmlbody: `
          <div>
            <h1>New Newsletter Subscription</h1>
            <p>A new user has subscribed to the newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>`
      };
    } else if (type === 'contact') {
      emailPayload = {
        from: {
          address: "noreply@teachoneself.com",
          name: "Teach Oneself"
        },
        to: [{
          email_address: {
            address: "z@teachoneself.com",
            name: "Zachary"
          }
        }],
        subject: "New Contact Form Submission",
        htmlbody: `
          <div>
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>`
      };
    } else {
      throw new Error('Invalid email type');
    }

    console.log('Sending email with payload:', JSON.stringify(emailPayload));

    try {
      const response = await client.sendMail(emailPayload);
      console.log('Email sent successfully:', response);

      return new Response(
        JSON.stringify({ success: true, result: response }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200 
        }
      );
    } catch (emailError) {
      console.error('ZeptoMail API error:', emailError);
      throw new Error(`ZeptoMail API error: ${JSON.stringify(emailError)}`);
    }

  } catch (error) {
    console.error('Error in send-email function:', error);
    
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