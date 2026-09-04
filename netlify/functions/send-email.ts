import nodemailer from 'nodemailer';

interface SendEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const handler = async (event: any) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const data: SendEmailRequest = JSON.parse(event.body || '{}');
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Missing required fields (name, email, message)' }),
      };
    }

    // Read SMTP settings from Environment Variables with fallback
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'jhasketansa86@gmail.com';
    // Clean up Gmail App Password spaces if any
    const rawPass = process.env.SMTP_PASS || 'pipt jnzv misp rmej';
    const smtpPass = rawPass.replace(/\s+/g, '');
    const smtpTo = process.env.SMTP_TO || 'jhasketansa86@gmail.com';

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailSubject = subject?.trim() 
      ? `[Portfolio Inquiry] ${subject} - from ${name}`
      : `[Portfolio Inquiry] New message from ${name}`;

    // 1. Send Notification Email to Jhasaketan
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: smtpTo,
      replyTo: `"${name}" <${email}>`,
      subject: emailSubject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #030712; color: #f8fafc; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; color: #ffffff; font-weight: 700; letter-spacing: -0.5px; }
            .content { padding: 28px 24px; }
            .field { margin-bottom: 16px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: 600; margin-bottom: 4px; }
            .value { font-size: 15px; color: #f1f5f9; font-weight: 500; }
            .message-box { background: #1e293b; border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 12px; padding: 18px; margin-top: 12px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { padding: 18px 24px; background: #0b1120; border-top: 1px solid rgba(148, 163, 184, 0.1); text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⚡ New Portfolio Transmission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Sender Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Sender Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></div>
              </div>
              ${subject ? `
              <div class="field">
                <div class="label">Subject / Role</div>
                <div class="value">${subject}</div>
              </div>` : ''}
              <div class="field">
                <div class="label">Message Body</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Sent via Jhasaketan Sa Developer Portfolio • You can reply directly to this email to contact the sender.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully. Jhasaketan will get back to you shortly!',
      }),
    };
  } catch (error: any) {
    console.error('Error sending email via SMTP:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: 'Failed to send message via SMTP server. Please try again later.',
        details: error?.message || String(error),
      }),
    };
  }
};
