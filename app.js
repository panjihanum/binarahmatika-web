#!/usr/bin/env node

/**
 * Next.js Standalone Server Entry Point for Shared Hosting
 * Usage: npm start or node app.js
 */

const path = require('path')

// Server configuration
const dir = path.join(__dirname)
const currentPort = parseInt(process.env.PORT, 10) || 3000
const hostname = process.env.HOSTNAME || '0.0.0.0'

process.env.NODE_ENV = 'production'
process.chdir(__dirname)

// Load Next.js and start server
try {
  console.log('🚀 Starting server...')
  console.log(`📝 Port: ${currentPort}`)
  console.log(`🌐 Hostname: ${hostname}`)
  
  // Require the Next.js server
  const nextApp = require('./.next/standalone/server.js')
  
  console.log('✅ Server started successfully')
} catch (error) {
  console.error('❌ Error starting server:', error.message)
  if (!require('fs').existsSync('./.next')) {
    console.error('\n⚠️  Error: .next folder not found!')
    console.error('Please run: npm run build')
  }
  process.exit(1)
}
