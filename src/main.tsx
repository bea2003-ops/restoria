import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from "@/components/Theme/theme-provider.tsx";
import 'unfonts.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App/>
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>,
)
