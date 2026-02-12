#!/usr/bin/env node

/**
 * Optional: Next.js Production Server untuk cPanel Node.js
 * 
 * JANGAN gunakan file ini! Use: npm start (yang jalankan 'next start')
 * 
 * File ini hanya untuk referensi jika setup standalone di cPanel
 * Untuk local development dan testing: npm start sudah cukup
 */

const path = require('path')

process.chdir(__dirname)
process.env.NODE_ENV = 'production'

// Untuk standalone mode (jika ingin use):
// 1. Update next.config.ts: output: 'standalone'
// 2. npm run build
// 3. Run: node app.js

try {
  require('./.next/standalone/server.js')
} catch (error) {
  console.error('ERROR: Standalone mode not configured!')
  console.error('Use: npm start (atau next start)')
  process.exit(1)
}
