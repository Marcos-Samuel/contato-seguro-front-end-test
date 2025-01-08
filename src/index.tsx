import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import Home from './pages/Home/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <Home/>
    </Theme>
  </StrictMode>,
)
