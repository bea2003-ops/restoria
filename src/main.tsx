import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import {HelmetProvider} from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </StrictMode>,
)
