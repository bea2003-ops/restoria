import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {ThemeProvider} from '@/components/Theme/theme-provider.tsx';
import 'unfonts.css';
import './localization/i18n.ts';

const rootElement = document.getElementById('root')!;

const Root = (
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter basename="/">
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>
);

if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, Root);
} else {
    const root = createRoot(rootElement);
    root.render(Root);
}