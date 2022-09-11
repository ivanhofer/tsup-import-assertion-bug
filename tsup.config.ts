import { defineConfig } from 'tsup'

export default defineConfig([
  {
    name: 'main',
    entry: ['./src/index.ts'],
    outDir: './tsup',
    format: ['esm'],
  }
])
