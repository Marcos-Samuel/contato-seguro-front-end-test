import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import MyRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme } from './contexts/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <AppTheme>
          <MyRoutes />
        </AppTheme>
      </BrowserRouter>
    </Theme>
  </StrictMode>
)
