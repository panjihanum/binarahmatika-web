#!/usr/bin/env node

/**
 * Next.js Server untuk Shared Hosting
 * Bisa dijalankan: node app.js atau npm start
 */

const http = require('http')
const path = require('path')

// Setup environment
process.env.NODE_ENV = 'production'
process.chdir(__dirname)

// Load Next.js standalone server
const app = require('./.next/standalone/server.js')

// Create HTTP server
const server = http.createServer(app)

// Listen (cPanel akan assign port otomatis)
server.listen()

// Log when server is ready
server.on('listening', function() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('✅ Server listening on ' + bind)
})

server.on('error', function(err) {
  if (err.code === 'EADDRINUSE') {
    console.error('❌ Port already in use')
  } else {
    console.error('❌ Server error:', err.message)
  }
  process.exit(1)
})

process.on('SIGTERM', function() {
  console.log('Shutting down gracefully...')
  server.close(function() {
    process.exit(0)
  })
})
