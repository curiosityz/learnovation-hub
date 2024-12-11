import { serve } from "https://deno.fresh.dev/std@v9.6.1/http/server.ts";
import { MailerSend, EmailParams, Sender, Recipient } from "npm:mailersend";

const MAILERSEND_API_KEY = Deno.env.get('MAILERSEND_API_KEY') || '';
const mailerSend = new MailerSend({ apiKey: MAILERSEND_API_KEY });

const sender = new Sender("noreply@teachoneself.com", "Teach Oneself");
const recipient = new Recipient("z@teachoneself.com", "Teach Oneself Team");

serve(async (req) => {
  try {
    const { type, email, name, message } = await req.json();
    
    let emailParams;
    
    if (type === 'subscription') {
      emailParams = new EmailParams()
        .setFrom(sender)
        .setTo([recipient])
        .setReplyTo(sender)
        .setSubject("New Newsletter Subscription")
        .setHtml(`
          <h1>New Newsletter Subscription</h1>
          <p>A new user has subscribed to the newsletter:</p>
          <p>Email: ${email}</p>
        `);
    } else if (type === 'contact') {
      emailParams = new EmailParams()
        .setFrom(sender)
        .setTo([recipient])
        .setReplyTo(new Sender(email, name))
        .setSubject("New Contact Form Submission")
        .setHtml(`
          <h1>New Contact Form Submission</h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message:</p>
          <p>${message}</p>
        `);
    } else {
      throw new Error('Invalid email type');
    }

    await mailerSend.email.send(emailParams);

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});