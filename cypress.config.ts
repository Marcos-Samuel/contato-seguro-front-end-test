import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: async (baseConfig) => {
        if (!baseConfig) {
          console.error('baseConfig is undefined!');
          return {};
        }
        const modifiedConfig = {
          ...baseConfig,
          server: {
            ...baseConfig.server,
            port: 5173,
          },
        };

        return modifiedConfig;
      },
    },
  },
});
