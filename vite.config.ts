import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

function assetNotFoundPlugin(): Plugin {
  return {
    name: 'asset-not-found-plugin',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/')) {
          const cleanUrl = req.url.split('?')[0];
          const filePath = path.join(__dirname, 'dist', cleanUrl);
          if (!fs.existsSync(filePath)) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('Asset Not Found');
          }
        }
        next();
      });
    },
  };
}

function netlifyFunctionsDevPlugin(): Plugin {
  return {
    name: 'netlify-functions-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (
          req.url &&
          (req.url.startsWith('/.netlify/functions/send-email') || req.url.startsWith('/api/send-email'))
        ) {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const { name, email, subject, message } = JSON.parse(body || '{}');
                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ error: 'Missing required fields' }));
                }

                const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
                const smtpPort = Number(process.env.SMTP_PORT) || 465;
                const smtpUser = process.env.SMTP_USER || 'jhasketansa86@gmail.com';
                const rawPass = process.env.SMTP_PASS || 'pipt jnzv misp rmej';
                const smtpPass = rawPass.replace(/\s+/g, '');
                const smtpTo = process.env.SMTP_TO || 'jhasketansa86@gmail.com';

                const transporter = nodemailer.createTransport({
                  host: smtpHost,
                  port: smtpPort,
                  secure: smtpPort === 465,
                  auth: { user: smtpUser, pass: smtpPass },
                });

                const emailSubject = subject?.trim()
                  ? `[Portfolio Inquiry] ${subject} - from ${name}`
                  : `[Portfolio Inquiry] New message from ${name}`;

                await transporter.sendMail({
                  from: `"Portfolio Contact Form" <${smtpUser}>`,
                  to: smtpTo,
                  replyTo: `"${name}" <${email}>`,
                  subject: emailSubject,
                  html: `
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #030712; color: #f8fafc; padding: 24px;">
                      <div style="max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 16px; overflow: hidden;">
                        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px; text-align: center;">
                          <h2 style="margin: 0; color: #ffffff;">⚡ New Portfolio Message</h2>
                        </div>
                        <div style="padding: 24px;">
                          <p><strong>Sender:</strong> ${name}</p>
                          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
                          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
                          <hr style="border-color: #334155; margin: 16px 0;" />
                          <p><strong>Message:</strong></p>
                          <div style="background: #1e293b; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                        </div>
                      </div>
                    </body>
                    </html>
                  `,
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: true, message: 'Email sent successfully via SMTP!' }));
              } catch (err: any) {
                console.error('Local dev SMTP error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: err?.message || 'Failed to send email via SMTP' }));
              }
            });
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), assetNotFoundPlugin(), netlifyFunctionsDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('node_modules/motion') || id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
          },
        },
      },
    },
  };
});
