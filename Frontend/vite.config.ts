import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const port = process.env.FRONTEND_PORT || 5173

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  envDir: '../',
  server: {
    host:true,
    port: Number(port)
  }
})
