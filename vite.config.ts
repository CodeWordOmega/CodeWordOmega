import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    cors: true,
    origin: 'https://402b-2605-59c8-4515-8608-cca-a552-470f-c266.ngrok-free.app'
  }
})