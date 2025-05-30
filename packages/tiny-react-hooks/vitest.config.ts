import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      extension: ['.ts'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/index.ts']
    },
  },
});
