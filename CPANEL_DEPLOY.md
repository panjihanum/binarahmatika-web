# Deploy ke cPanel Node.js App

## Recommended: next start (Paling Simple & Reliable)

### 1. Upload ke Server
- Via FTP/cPanel File Manager upload folder ke: `repositories/binarahmatika-web`
- Atau via Git Clone (jika support)

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
   - **Application startup file**: `server.js` ← Biarkan kosong, Next.js auto-detect
   - **Application URL**: Your domain (e.g., binarahmatika-group.com)
   - **Passenger log file**: `/home/binarahm/logs/passenger.log` (optional)
   - **Environment variables**:
     ```
     NODE_ENV=production
     ```
   - **Run "npm install" when creating/updating?**: ✓ Checked
   - **Run "npm start" script?**: ✓ Checked ← Let cPanel run npm start
5. Click **Create**
6. **Restart Application**

### 4. Test
Open browser → `https://yourdomain.com` ✅

---

## Configuration

### package.json
```json
"start": "next start"  // Di-jalankan oleh cPanel
```

### next.config.ts
```typescript
// Normal mode - CSS dan assets ter-load dengan benar
// Tidak perlu standalone mode
```

---

## Troubleshooting

### CSS/Assets tidak load
- Pastikan: `npm run build` успешно
- Check cPanel logs: Setup Node.js App > View Logs
- Restart aplikasi di cPanel

### Error: build not found
- Jalankan: `npm run build`
- Cek folder `.next` ada

---

## File Structure

```
~/repositories/binarahmatika-web/
├── .next/              (auto-generated)
├── public/             (static assets)
├── src/                (source code)
├── package.json
├── next.config.ts
└── ...
```

---

✅ **Selesai!** 🚀

