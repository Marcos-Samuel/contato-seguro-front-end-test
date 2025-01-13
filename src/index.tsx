import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import MyRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme } from './contexts/ThemeContext';
import { AuthorProvider } from './contexts/AuthorContext';
import { BookProvider } from './contexts/BookContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme>
      <Theme>
        <BrowserRouter>
          <BookProvider>
            <AuthorProvider>
              <MyRoutes />
            </AuthorProvider>
          </BookProvider>
        </BrowserRouter>
      </Theme>
    </AppTheme>
  </StrictMode>
);
