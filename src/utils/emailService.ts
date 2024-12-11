import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
});

const sender = new Sender("noreply@teachoneself.com", "Teach Oneself");
const recipient = new Recipient("z@teachoneself.com", "Teach Oneself Team");

export const sendSubscriptionEmail = async (email: string) => {
  console.log("Sending subscription email for:", email);
  
  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo([recipient])
    .setReplyTo(sender)
    .setSubject("New Newsletter Subscription")
    .setHtml(`
      <h1>New Newsletter Subscription</h1>
      <p>A new user has subscribed to the newsletter:</p>
      <p>Email: ${email}</p>
    `);

  try {
    const response = await mailerSend.email.send(emailParams);
    console.log("Subscription email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending subscription email:", error);
    throw error;
  }
};

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log("Sending contact form email for:", data);
  
  const emailParams = new EmailParams()
    .setFrom(sender)
    .setTo([recipient])
    .setReplyTo(new Sender(data.email, data.name))
    .setSubject("New Contact Form Submission")
    .setHtml(`
      <h1>New Contact Form Submission</h1>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message:</p>
      <p>${data.message}</p>
    `);

  try {
    const response = await mailerSend.email.send(emailParams);
    console.log("Contact form email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending contact form email:", error);
    throw error;
  }
};