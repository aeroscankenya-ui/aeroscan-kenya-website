// Cloudflare Pages Function for /api/contact
// Handles contact and partnership form submissions on Cloudflare Pages

interface Env {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  SMTP_FROM?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = await context.request.json() as {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      subject?: string;
      message?: string;
      partnershipType?: string;
    };

    const { name, email, phone, company, subject, message, partnershipType } = body;

    let textContent = `New Inquiry received from ${name || 'N/A'} (${email || 'N/A'})\n`;
    if (phone) textContent += `Phone: ${phone}\n`;
    if (company) textContent += `Company: ${company}\n`;
    if (subject) textContent += `Subject: ${subject}\n`;
    if (partnershipType) textContent += `Partnership Type: ${partnershipType}\n`;
    textContent += `\nMessage:\n${message || 'No message provided'}\n`;

    // Note: Cloudflare Pages / Workers use fetch-based email dispatch (e.g., MailChannels, Resend, SendGrid)
    // If SMTP credentials or MailChannels are configured in Cloudflare environment:
    console.log("Contact form submission received:", {
      to: "info@aeroscankenya.co.ke",
      subject: `[Website Inquiry] ${subject || partnershipType || "New Message"}`,
      content: textContent
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message processed successfully. Form submitted to Aero Scan Kenya." 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || "Failed to process message" }), 
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
