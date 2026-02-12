#!/usr/bin/env node

/**
 * Next.js Production Server untuk cPanel
 * Dijalankan otomatis oleh Passenger saat cPanel detect app.js
 * 
 * Setup: 
 * 1. nppm run build (generate .next folder)
 * 2. npm install --production di cPanel
 * 3. cPanel auto-run: node app.js (file ini)
 */

const { spawn } = require('child_process');
const path = require('path');

// Ensure we're in the right directory
process.chdir(__dirname);

// Set production environment
process.env.NODE_ENV = 'production';

// Log startup info
console.log('[Next.js App] Starting in production mode...');
console.log('[Next.js App] CWD:', process.cwd());
console.log('[Next.js App] NODE_ENV:', process.env.NODE_ENV);

/**
 * Start Next.js server via 'npm start'
 * which runs: next start
 */
const child = spawn('npm', ['start'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
});

// Handle process signals for graceful shutdown
process.on('SIGTERM', () => {
  console.log('[Next.js App] SIGTERM received, shutting down...');
  child.kill('SIGTERM');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('[Next.js App] SIGINT received, shutting down...');
  child.kill('SIGINT');
  process.exit(0);
});

// Handle child process exit
child.on('exit', (code, signal) => {
  console.log(`[Next.js App] Process exited with code ${code} and signal ${signal}`);
  process.exit(code || 0);
});
