import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    image: {
        domains: ["images.unsplash.com"],
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
