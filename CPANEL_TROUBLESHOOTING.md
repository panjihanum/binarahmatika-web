# Troubleshooting cPanel Node.js App Setup

## Error: 500 Internal Server Error

### Penyebab #1: Build tidak di-generate
**Gejala:** aplikasi start tapi error 500
**Solusi:**
```bash
cd ~/repositories/binarahmatika-web
npm run build    # Generate .next folder
npm start        # Test locally
```

### Penyebab #2: Dependencies tidak lengkap
**Gejala:** Error "Module not found"
**Solusi:**
```bash
cd ~/repositories/binarahmatika-web
rm -rf node_modules package-lock.json
npm install                  # Install semua deps
npm install --production     # Install production deps only
npm run build
```

### Penyebab #3: PORT conflict
**Gejala:** "Error: listen EADDRINUSE"
**Solusi:** cPanel auto-assign PORT, jangan perlu config manual

### Penyebab #4: Lihat detail error

#### Melalui cPanel UI:
1. Go to: **Setup Node.js App**
2. Click aplikasi Anda
3. Click **View Logs**
4. Lihat error message

#### Melalui SSH:
```bash
# Check passenger log
cat /home/binarahm/logs/passenger.log

# Check npm error log
cat ~/.npm/_logs/*-debug.log

# Test manual
cd ~/repositories/binarahmatika-web
npm start
```

---

## ✅ Setup Step-by-Step di cPanel (Correct Way)

### Step 1: Upload & Prepare Folder
```bash
# Via SSH
mkdir -p ~/repositories/binarahmatika-web
cd ~/repositories/binarahmatika-web

# Upload files dari local atau git clone
git clone https://github.com/username/repo.git .
# atau upload via FTP
```

### Step 2: Install Dependencies
```bash
cd ~/repositories/binarahmatika-web
npm install --production
```

### Step 3: Build Next.js
```bash
npm run build
# Verify .next folder exist
ls -la .next
```

### Step 4: Test Locally
```bash
npm start
# Should see: ▲ Next.js X.X.X
#             ✓ Ready in XXX ms
```

### Step 5: Setup di cPanel
1. Login cPanel
2. Go to: **Setup Node.js App** > **Create Application**
3. Fill exactly:
   ```
   Node.js version: 18+ atau Latest
   Application mode: Production
   Application root: /home/binarahm/repositories/binarahmatika-web
   Application startup file: (kosongkan atau tidak ada)
   Application URL: yourdomain.com
   Environment variables: NODE_ENV=production
   Run "npm install"?: YES (checked)
   Run "npm start"?: YES (checked)
   ```
4. Click **Create**
5. Go to **Restart Application**

### Step 6: Test & Check Logs
```bash
# Test di browser: https://yourdomain.com

# Jika error, check logs:
cat /home/binarahm/logs/passenger.log
```

---

## ⚠️ Common Issues & Fix

| Error | Cause | Fix |
|-------|-------|-----|
| 500 error | Build tidak ada | `npm run build` |
| Module not found | Dependencies tidak lengkap | `npm install --production` |
| EADDRINUSE | Port conflict | Restart di cPanel |
| Timeout | Build terlalu lama | Increase timeout di cPanel |
| CSS/JS tidak load | Static files path wrong | Check `npm run build` success |

---

## 🔍 Debug Checklist

- [ ] Folder ada: `~/repositories/binarahmatika-web`
- [ ] Files ada: `package.json`, `next.config.ts`, `.next/`
- [ ] Dependencies: `npm list` (check for errors)
- [ ] Build success: `.next/` folder exists dan tidak kosong
- [ ] npm start works: Test manual di SSH
- [ ] Logs checked: Review passenger.log
- [ ] Environment: NODE_ENV=production di cPanel
- [ ] Restart: Done di cPanel UI

---

## 💡 Prevention Tips

1. **Always build locally first**
   ```bash
   npm run build
   npm start
   ```

2. **Test before uploading to cPanel**
   - Pastikan semua work lokal

3. **Keep logs accessible**
   - Simpan SSH terminal terbuka untuk monitor

4. **Use git for easy update**
   ```bash
   cd ~/repositories/binarahmatika-web
   git pull origin main
   npm run build
   # Restart di cPanel
   ```

---

## 📞 Still Not Working?

1. Check **Passenger log** - Lihat error detail
2. Run `npm install` manual di SSH
3. Run `npm start` manual di SSH untuk lihat error sebenarnya
4. Verify Node.js version cocok
5. Contact cPanel support dengan error message

---

Sudah clear? 🚀
