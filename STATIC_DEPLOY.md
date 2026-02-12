# Deploy Static HTML ke cPanel

**Site ini sudah di-convert ke Static HTML** - 100% file HTML/CSS/JS, tidak perlu Node.js!

## 📋 Yang Ada di Folder `out/`

```
out/
├── index.html          ← Homepage
├── _not-found.html     ← 404 page (auto-redirect)
├── _next/              ← CSS/JavaScript files
├── assets/             ← Images, videos, PDFs
└── 404.html            ← cPanel error page
```

Total: **~37 MB** static files

---

## 🚀 Deploy ke cPanel (3 Steps)

### 1️⃣ Lokal - Build Static Files
```powershell
npm run build
# Generated: folder "out/" dengan semua HTML/CSS/JS
```

### 2️⃣ Upload ke cPanel via FTP

**Upload ENTIRE folder `out/` content ke:** `public_html/`

Using FTP/File Manager:
```
local: C:\...\binarahmatika-web\out\*
  ↓ Upload
remote: /home/binarahm/public_html/
```

**Important:** Upload semua files di dalam `out/`, structure harus sama:
```
/home/binarahm/public_html/
├── index.html
├── _not-found.html
├── _next/
├── assets/
└── 404.html
```

### 3️⃣ Test Domain

Buka domain: **https://binarahmatika-group.com/**

✅ Expected:
- Page load dengan CSS
- Images visible
- All styling applied
- No 500 errors

---

## 🔄 Update Content (If Needed Later)

Kalau nanti edit content:

```powershell
# Edit component/content
# Rebuild static
npm run build

# Upload `out/` folder content lagi ke public_html/
```

---

## ✅ Why Static HTML Works

| Feature | Node.js | Static HTML |
|---------|---------|------------|
| Server required | ✅ Yes | ❌ No |
| cPanel complexity | ⚠️ Medium/Hard | ✅ Easy |
| Performance | Good | ✅ **Faster** |
| SEO | ✅ Good | ✅ **Better** |
| Hosting cost | More | ✅ **Cheaper** |
| Maintenance | Requires updates | ✅ Simple |

---

## 📝 Notes

- **No Node.js needed** - just upload HTML files
- **No build on server** - build locally only
- **100% static** - CSS/JS bundled, ready to use
- **Fast delivery** - web server serves HTML directly
- **SEO friendly** - all pages pre-rendered

---

## 🛠️ If Download Large (37 MB)

If upload slow, consider:

1. **Use Git** instead of FTP:
   ```bash
   # SSH ke cPanel
   ssh binarahm@binarahmatika.com
   cd public_html
   git clone <your-repo> .
   # Baru upload hanya perubahan kecil
   ```

2. **Compress then upload:**
   ```powershell
   # Lokal
   Compress-Archive -Path out -DestinationPath out.zip
   # Upload out.zip ke cPanel
   # Extract via File Manager: out.zip → Extract
   ```

---

## 🎯 TLDR

1. `npm run build` (lokal)
2. Upload `out/` folder content ke `public_html/`
3. Done! Site live ✅

No Node.js, no complexity, just HTML! 🎉
