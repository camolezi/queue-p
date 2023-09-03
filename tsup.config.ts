import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  format: ['cjs', 'esm'],
});
