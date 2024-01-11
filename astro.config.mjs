import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import { loadEnv } from "vite";
const { PUBLIC_ENV, STORYBLOK_TOKEN_ACCESS} = loadEnv(import.meta.env.MODE, process.cwd(), "");



// https://astro.build/config
export default defineConfig({
  output: PUBLIC_ENV === 'preview' ? 'server' : 'static',
  adapter: PUBLIC_ENV === 'preview' ? netlify() : undefined,
  integrations: [tailwind(), storyblok({
    accessToken: STORYBLOK_TOKEN_ACCESS,
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
      processItem: 'blocks/ProcessItem',
      stats: 'blocks/Stats',
      statsItem: 'blocks/StatsItem',
      contacts: 'blocks/Contacts',
      FormWrapper: 'blocks/FormWrapper',
      FormInput: 'blocks/FormInput',
      FormTextarea: 'blocks/FormTextarea'
    }
  }), icon()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});