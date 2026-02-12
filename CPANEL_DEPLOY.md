# Deploy ke cPanel Node.js App

## Quick Setup (5 menit)

### 1. Upload ke Server
- Via FTP/cPanel File Manager upload folder ke: `repositories/binarahmatika-web`
- Atau via Git Clone (jika server support)

### 2. Install & Build
Via SSH atau cPanel Terminal:
```bash
cd ~/repositories/binarahmatika-web
npm install --production
npm run build
```

### 3. Setup di cPanel
1. Login ke **cPanel**
2. Go to: **Setup Node.js App** (atau **Application Manager**)
3. Click **Create Application**
4. Fill in:
   - **Node.js version**: 18+ (atau latest)
   - **Application mode**: Production
   - **Application root**: `/home/binarahm/repositories/binarahmatika-web`
   - **Application startup file**: `app.js`
   - **Application URL**: Your domain (e.g., binarahmatika-group.com)
   - **Passenger log file**: `/home/binarahm/logs/passenger.log`
   - **Environment variables**:
     ```
     NODE_ENV=production
     ```
   - **Run "npm install" when creating/updating?**: ✓ Checked
   - **Run "npm start" script?**: ✗ Unchecked (cPanel handle it)
5. Click **Create**
6. **Restart Application** dari cPanel

### 4. Test
Open browser → `https://yourdomain.com` ✅

---

## Configuration Details

### app.js
- Entry point untuk cPanel Node.js App
- Automatically load `./.next/standalone/server.js`
- Support environment variables dari cPanel

### next.config.ts
```typescript
output: 'standalone'  // Generate standalone build
```

### package.json
```json
"start": "node app.js"  // Entry point untuk npm start
```

---

## Environment Variables (cPanel)

Setup di cPanel > Setup Node.js App > Environment Variables:

```
NODE_ENV=production
PORT=[auto from cPanel]
HOSTNAME=0.0.0.0
```

---

## Troubleshooting

### CSS/Assets tidak load
- Pastikan build sudah di-generate: `npm run build`
- Cek folder `.next` sudah ada

### Error: .next/standalone not found
- Jalankan: `npm run build`
- Pastikan `.next` folder ada di server

### Port conflict
- cPanel auto-assign port, tidak perlu worry

### Restart aplikasi
1. Via cPanel: Setup Node.js App > Restart
2. Atau: `npm start` di SSH

---

## File Structure

```
~/repositories/binarahmatika-web/
├── .next/              (auto-generated from npm run build)
├── public/             (static assets)
├── src/                (source code)
├── app.js              (entry point ⭐)
├── package.json
├── next.config.ts
└── ...
```

---

## FAQ

**Q: Bagaimana update code?**
A: Push ke GitHub → cPanel Git pull atau upload via FTP → Restart app

**Q: Perlu re-build setiap kali update?**
A: Ya, jalankan: `npm run build` setelah update code

**Q: Bagaimana lihat logs?**
A: cPanel > Setup Node.js App > View Logs

---

## Deployment Checklist

- [ ] Code sudah push ke git
- [ ] Upload folder ke cPanel (`repositories/binarahmatika-web`)
- [ ] Jalankan `npm install --production`
- [ ] Jalankan `npm run build`
- [ ] Setup Node.js App di cPanel dengan konfigurasi di atas
- [ ] Test di browser
- [ ] Check Passenger logs jika ada error

---

Selesai! 🚀
