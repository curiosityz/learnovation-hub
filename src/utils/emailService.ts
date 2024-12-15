import { supabase } from "@/integrations/supabase/client";

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log("Sending contact form email with data:", data);
  
  const { data: response, error } = await supabase.functions.invoke('send-email', {
    body: {
      type: 'contact',
      ...data
    }
  });

  if (error) {
    console.error("Error sending contact form email:", error);
    throw error;
  }

  console.log("Contact form email sent successfully:", response);
  return response;
};

export const sendSubscriptionEmail = async (email: string) => {
  console.log("Sending subscription email for:", email);
  
  const { data: response, error } = await supabase.functions.invoke('send-email', {
    body: {
      type: 'subscription',
      email
    }
  });

  if (error) {
    console.error("Error sending subscription email:", error);
    throw error;
  }

  console.log("Subscription email sent successfully:", response);
  return response;
};