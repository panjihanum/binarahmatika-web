# Quick Setup for Shared Hosting

## Step 1: Upload ke Server
Via FTP/cPanel File Manager upload folder ini ke `public_html/`

## Step 2: Install Dependencies
Via SSH atau cPanel Terminal:
```bash
cd ~/public_html/binarahmatika-web
npm install --production
npm run build
```

## Step 3: Setup Node.js di cPanel
1. Login cPanel
2. Go to **Setup Node.js App**
3. Click **Create Application**
4. Set:
   - Application Root: `/home/username/public_html/binarahmatika-web`
   - Startup File: `app.js`
   - Click **Create**

## Step 4: Test
Open browser → `https://yourdomain.com` ✅

---

**Docs**: See [CPANEL_SETUP.md](CPANEL_SETUP.md) for details
