import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from '@/components/Theme/theme-provider.tsx';
import 'unfonts.css';
import './localization/i18n.ts';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
    hydrateRoot(
        rootElement,
        <StrictMode>
            <HelmetProvider>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <App/>
                </ThemeProvider>
            </HelmetProvider>
        </StrictMode>
    );
} else {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <HelmetProvider>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <App/>
                </ThemeProvider>
            </HelmetProvider>
        </StrictMode>
    );
}