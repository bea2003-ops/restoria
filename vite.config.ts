import path from "path"
import tailwindcss from "@tailwindcss/vite"

import {defineConfig} from "vite"
import react from "@vitejs/plugin-react-swc";
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
    base: '/',
    plugins: [react(), tailwindcss(),
        Unfonts({
            google: {
                families: [
                    'Montserrat:wght@100;200;300;400;500;600;700;800;900',
                    'Roboto:wght@400;700',
                ],
                preconnect: true, // Adds <link rel="preconnect"> for faster loading
                display: 'swap', // Controls font-display (e.g., 'swap', 'block', 'auto')
                injectTo: 'head-prepend', // Where to inject the font links
            },
        }),

    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
