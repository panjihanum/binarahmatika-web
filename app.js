#!/usr/bin/env node

/**
 * Next.js Application Server untuk cPanel Node.js App
 * 
 * Entry point untuk production di shared hosting
 * Jalankan: node app.js atau npm start
 * 
 * cPanel akan set environment variables:
 * - PORT: Port yang di-assign oleh cPanel
 * - NODE_ENV: production
 */

const path = require('path')

// Set working directory ke root aplikasi
process.chdir(__dirname)

// Set production environment
process.env.NODE_ENV = 'production'

// Jalankan standalone server dari Next.js build
try {
  require('./.next/standalone/server.js')
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('❌ Error: .next/standalone folder not found!')
    console.error('Please run: npm install && npm run build')
    process.exit(1)
  }
  throw error
}
