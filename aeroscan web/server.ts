import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser for JSON
  app.use(express.json());

  // API Route for sending emails
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, company, subject, message, partnershipType } = req.body;

      // Ensure SMTP details are configured
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({ error: "SMTP configuration is missing on the server" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Construct email content
      let textContent = `New Inquiry received from ${name} (${email})\n`;
      if (phone) textContent += `Phone: ${phone}\n`;
      if (company) textContent += `Company: ${company}\n`;
      if (subject) textContent += `Subject: ${subject}\n`;
      if (partnershipType) textContent += `Partnership Type: ${partnershipType}\n`;
      textContent += `\nMessage:\n${message}\n`;

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: "info@aeroscankenya.co.ke", // Hardcoded per user request
        subject: `[Website Inquiry] ${subject || partnershipType || "New Message"}`,
        text: textContent,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from 'dist' directory in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
