import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'blocks/Page',
      hero: 'blocks/Hero',
      about: 'blocks/About',
      whyWe: 'blocks/WhyWe',
      whyWeItem: 'blocks/WhyWeItem',
      portfolio: 'blocks/Portfolio',
      article: 'blocks/Article'
    }
  }), icon()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});