# Aero Scan Kenya - Official Web Platform

Building Africa's Digital Future. Connected technology, intelligent platforms, and real-world digital infrastructure.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn or pnpm or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your details:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 How to Import to GitHub

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aero Scan Kenya web app"
   ```

2. **Set main branch and link to your GitHub repo:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

*(Alternatively, in Google AI Studio, click **Settings (⚙️) > Export to GitHub** or **Download ZIP**).*

---

## ☁️ How to Deploy to Cloudflare

You can deploy this project to **Cloudflare Pages** in less than 2 minutes:

### Method 1: Cloudflare Pages (Git Integration - Recommended)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository (`aero-scan-kenya`).
4. Set the **Build Settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build:client` (or `vite build`)
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. *(Optional)* Add any environment variables under **Settings > Environment variables**.
6. Click **Save and Deploy**.

> **Note on SPA Routing**: The project includes `public/_redirects` (`/* /index.html 200`) so all client-side routes (e.g. `/solutions`, `/partners`, `/products`, `/about`, `/contact`) will work seamlessly on Cloudflare Pages without 404s on page refresh.

### Method 2: Direct Upload via Wrangler CLI

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```
2. Build the client application:
   ```bash
   npm run build:client
   ```
3. Deploy to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy dist --project-name=aero-scan-kenya
   ```

---

## 📁 Project Structure

```
├── functions/             # Cloudflare Pages Functions (/api/contact serverless handler)
├── public/                # Static assets, logos, and _redirects
│   ├── _redirects         # Cloudflare Pages SPA routing redirect configuration
│   ├── logo-persistent.png
│   ├── logo-partner-node.gif
│   ├── logo-autocare.png
│   ├── logo-garagepro.png
│   └── logo-docufolio.png
├── src/
│   ├── components/        # UI & layout components (Navbar, Footer, ProtectedRoute, etc.)
│   ├── pages/             # App pages (Home, Products, Solutions, Technology, Partners, About, Contact, etc.)
│   ├── config.ts          # Central platform configuration and metadata
│   ├── types.ts           # Shared TypeScript types
│   ├── App.tsx            # Main router and route definitions
│   └── main.tsx           # Entry point
├── server.ts              # Express backend server (for Node.js / Docker / Cloud Run deployments)
├── vite.config.ts         # Vite configuration
└── package.json           # Project manifest and scripts
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide Icons, Motion (Framer Motion)
- **Backend / Serverless**: Express + Nodemailer (Node.js) & Cloudflare Pages Functions (Edge Serverless)
- **Deployment Targets**: Cloudflare Pages, Cloud Run, Docker, Vercel, VPS
