import {ViteSSG} from 'vite-ssg';
import App from '@/App.tsx';

const routes = [
    {path: '/', component: App},
    {path: '/en', component: App},
    {path: '/hu', component: App},
];

export const createApp = ViteSSG(
    App,
    {
        routes,
        base: '/',
    },
);