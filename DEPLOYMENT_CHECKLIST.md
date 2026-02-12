# Pre-Deployment Checklist for cPanel

Follow this EXACTLY before uploading to cPanel. This prevents 99% of errors.

## Step 1: Build Locally ✅

On your Windows machine:

```powershell
# Kill any running Node processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Clean and rebuild
Remove-Item -Path ".next" -Force -Recurse -ErrorAction SilentlyContinue
npm run build
```

**Expected output:**
```
✓ Compiled successfully in X.Xs
```

**Verify folder exists:**
```powershell
Test-Path ".next"  # Should return True
```

---

## Step 2: Test Locally ✅

```powershell
npm start
# App should start on http://localhost:3000
```

**Must verify:**
- [ ] Site loads in browser
- [ ] CSS/styling visible (NOT plain HTML)
- [ ] No errors in console

**Stop server:** Ctrl+C

---

## Step 3: Prepare Upload ✅

Only upload these folders (via FTP/File Manager):

```
repositories/binarahmatika-web/
├── src/                    ✅ Upload
├── public/                 ✅ Upload
├── .next/                  ✅ Upload (CRITICAL!)
├── package.json            ✅ Upload
├── package-lock.json       ✅ Upload
├── next.config.ts          ✅ Upload
├── tsconfig.json           ✅ Upload
├── .gitignore              ✅ Upload
├── .prettierrc              ✅ Upload
├── eslint.config.mjs        ✅ Upload
│
├── node_modules/           ❌ DO NOT UPLOAD (will break on Linux!)
├── .next.lock*             ❌ DO NOT UPLOAD (temporary files)
└── .git/                   ❌ DO NOT UPLOAD (not needed)
```

**Total upload folders: 5-8 items**

---

## Step 4: Install on cPanel (SSH) ✅

SSH to your cPanel server:

```bash
ssh binarahm@binarahmatika.com
# Or use cPanel Terminal

cd ~/repositories/binarahmatika-web

# Install production dependencies for LINUX
npm install --production

# Verify installation
npm list next react react-dom
# Should show versions, no errors
```

**Expected output:**
```
npm notice created a lockfile as package-lock.json
added X packages from Y contributors
...
```

---

## Step 5: Setup in cPanel UI ✅

1. Log into **cPanel**
2. Find **Node.js App** section (or **Application Manager**)
3. Click **Create Application** or **Add Application**
4. Fill in:
   - **Node.js Version:** 18 or Latest
   - **Application Mode:** Production
   - **Application Root:** `/home/binarahm/repositories/binarahmatika-web`
   - **Application Startup File:** (Leave EMPTY)
   - **Application URL:** Your domain
   - **Environment:** NODE_ENV=production

5. Click **Create**
6. Passenger will auto-start your app

---

## Step 6: Verify It Works ✅

Visit your domain: **http://binarahmatika-group.com**

- [ ] Page loads
- [ ] CSS visible and styled
- [ ] No 500 errors
- [ ] Images loading

---

## ⚠️ If You Get 500 Error:

Check SSH:

```bash
cd ~/repositories/binarahmatika-web

# 1. Check if .next folder exists
ls -la .next/ | head -5

# 2. Check if node_modules exist
ls -la node_modules/ | head -5

# 3. Manual test
npm start
# Should say "Ready in X.XXs"
# Then Ctrl+C to stop

# 4. Check Passenger logs
tail -50 ~/logs/passenger.log | grep -i error
```

---

## Common Mistakes (Avoid These!)

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| Upload `node_modules/` from Windows | Let cPanel/SSH install Linux versions |
| Build on cPanel | Build locally, upload `.next/` |
| Use cPanel "Run NPM Install" button | Use SSH: `npm install --production` |
| Upload without `.next/` folder | Always verify `.next/` exists before upload |
| Leave Application Startup File empty (wrong) | Leave it EMPTY - Passenger finds `next start` automatically |

---

## Summary Commands

**Lokal (Windows):**
```powershell
npm run build
npm start  # Verify works
```

**Upload via FTP:** src/, public/, .next/, package.json, etc.

**cPanel SSH:**
```bash
cd ~/repositories/binarahmatika-web
npm install --production
```

**cPanel UI:** Create Node.js App pointing to that folder.

---

Done? Your app should be live! 🚀
