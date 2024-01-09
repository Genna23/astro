import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), storyblok({
    accessToken: "jH8ZNSX96r6za283vZjPTwtt",
    components: {
      page: 'blocks/Page',
      hero: 'blocks/Hero',
      about: 'blocks/About',
      whyWe: 'blocks/WhyWe',
      whyWeItem: 'blocks/WhyWeItem',
      portfolio: 'blocks/Portfolio',
      article: 'blocks/Article',
      process: 'blocks/Process',
      processItem: 'blocks/ProcessItem'
    }
  }), icon()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});