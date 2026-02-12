#!/bin/bash

# cPanel Setup Verification Script
# Run ini SEBELUM setup di cPanel UI
# Usage: bash cpanel-verify.sh

echo "🔍 Verifying cPanel Node.js App Setup..."
echo ""

# Check 1: Folder structure
echo "✓ Check 1: Folder Structure"
[ -d ".next" ] && echo "  ✅ .next folder EXISTS" || echo "  ❌ .next folder MISSING - Run: npm run build"
[ -f "package.json" ] && echo "  ✅ package.json EXISTS" || echo "  ❌ package.json MISSING"
[ -f "next.config.ts" ] && echo "  ✅ next.config.ts EXISTS" || echo "  ❌ next.config.ts MISSING"
echo ""

# Check 2: Dependencies
echo "✓ Check 2: Dependencies"
if [ -d "node_modules" ]; then
  echo "  ✅ node_modules EXISTS"
  npm list 2>/dev/null | head -5
else
  echo "  ❌ node_modules MISSING - Run: npm install --production"
fi
echo ""

# Check 3: Build files
echo "✓ Check 3: Build Files"
if [ -d ".next" ]; then
  NEXT_FILES=$(find .next -type f | wc -l)
  echo "  ✅ .next folder has $NEXT_FILES files"
  [ -f ".next/BUILD_ID" ] && echo "  ✅ BUILD_ID file exists" || echo "  ❌ BUILD_ID missing"
else
  echo "  ❌ .next folder not found"
fi
echo ""

# Check 4: npm scripts
echo "✓ Check 4: npm Scripts"
grep -q '"start": "next start"' package.json && echo "  ✅ npm start = 'next start'" || echo "  ❌ npm start not configured"
grep -q '"build": "next build"' package.json && echo "  ✅ npm build configured" || echo "  ❌ npm build not found"
echo ""

# Check 5: Test start (if allowed)
echo "✓ Check 5: Can Start Server?"
echo "  ℹ️  To test locally: npm start"
echo "  ℹ️  Server should start in ~500ms"
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -d ".next" ] && [ -d "node_modules" ] && [ -f "package.json" ]; then
  echo "✅ Setup appears OK! Ready for cPanel"
  echo ""
  echo "Next steps:"
  echo "1. Upload this folder to cPanel: repositories/binarahmatika-web"
  echo "2. In cPanel > Setup Node.js App > Create Application:"
  echo "   - Root: /home/binarahm/repositories/binarahmatika-web"
  echo "   - Startup: (leave empty)"
  echo "   - npm install: YES"
  echo "   - npm start: YES"
  echo "3. Restart application"
  echo "4. Test in browser: https://yourdomain.com"
else
  echo "❌ Setup NOT ready! Please fix:"
  [ ! -d ".next" ] && echo "   - Run: npm run build"
  [ ! -d "node_modules" ] && echo "   - Run: npm install --production"
  [ ! -f "package.json" ] && echo "   - package.json missing!"
fi

echo ""
echo "Done! 🚀"
