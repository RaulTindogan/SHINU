import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RaulTindogan/",
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, }
})
