# Setup untuk Shared Hosting (cPanel)

## Requirements
- cPanel dengan Node.js support
- SSH access

## Quick Start (Recommended)

### 1. SSH ke Server
```bash
ssh user@yourdomain.com
cd ~/public_html
```

### 2. Clone/Upload Code
```bash
# Via Git
git clone https://github.com/yourusername/repo.git
cd binarahmatika-web

# Atau via FTP/cPanel File Manager upload folder
```

### 3. Install & Build
```bash
npm install --production
npm run build
```

### 4. Setup cPanel Node.js App
1. Login ke **cPanel**
2. Go to **Setup Node.js App** (atau **Application Manager**)
3. Click **Create Application**
4. Isi:
   - **Node.js Version**: Latest (v16+)
   - **Application Root**: `/home/username/public_html/binarahmatika-web`
   - **Application Startup File**: `app.js`
   - **Application URL**: Your domain
5. Click **Create**
6. Done! ✅

### 5. Test di Browser
Buka `https://yourdomain.com` - selesai!

## Manual Start via SSH
```bash
npm start
# Server berjalan di port yang ditentukan cPanel
```

## Troubleshooting

### Port conflict?
```bash
lsof -i :3000
kill -9 <PID>
```

### Module not found?
```bash
rm -rf node_modules package-lock.json
npm install --production
npm run build
```

### Cek logs
```bash
# Di cPanel: Setup Node.js App > View Logs
# Atau lihat di terminal saat npm start
```

## File Penting
- `app.js` - Entry point server
- `.next/` - Build output (auto-generated)
- `.htaccess` - Routing config
- `package.json` - Dependencies

Itu aja! Mudah kan? 🚀

