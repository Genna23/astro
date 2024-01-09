import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";

const { PUBLIC_ENV, STORYBLOK_TOKEN_ACCESS} = loadEnv(import.meta.env.MODE, process.cwd(), "");

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [tailwind(), storyblok({
    accessToken: "jH8ZNSX96r6za283vZjPTwtt",
    bridge: PUBLIC_ENV !== 'production',
    components: {
      page: 'blocks/Page',
      hero: 'blocks/Hero',
      about: 'blocks/About',
      whyWe: 'blocks/WhyWe',
      whyWeItem: 'blocks/WhyWeItem',
      portfolio: 'blocks/Portfolio',
      article: 'blocks/Article',
      process: 'blocks/Process',
      processItem: 'blocks/processItem'
    }
  }), icon()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});