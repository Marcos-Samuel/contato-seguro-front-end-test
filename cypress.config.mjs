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
          resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
          },
        };

        return modifiedConfig;
      },
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },

  e2e: {
    setupNodeEvents(on, config) {},
  },
});
