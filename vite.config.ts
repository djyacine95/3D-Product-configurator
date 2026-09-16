import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const port = Number(process.env.PORT) || 5173

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port,
  },
  preview: {
    host: true,
    port,
  },
})