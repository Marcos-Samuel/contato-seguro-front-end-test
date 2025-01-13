import { ThemeProvider } from 'styled-components';

import { ReactNode } from 'react';
import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';
interface AppThemeProps {
  children: ReactNode;
}

export function AppTheme({ children }: AppThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
