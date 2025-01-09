import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        purple: {
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
        };
      };
      secondary: {
        yellow: {
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
        };
      };
      system: {
        black: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
        };
        error: {
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
        };
        success: {
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
        };
      };
    };
  }
}

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
