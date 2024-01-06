import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro'

import tailwind from "@astrojs/tailwind";

import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv("", process.cwd(), 'STORYBLOK')

export default defineConfig({
  integrations: [tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'blocks/Page',
        hero: 'blocks/Hero',
        about: 'blocks/About',
        whyWe: 'blocks/WhyWe',
        whyWeItem: 'blocks/WhyWeItem',
      }
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  }
});