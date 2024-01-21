import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";

import { loadEnv } from "vite";
const { PUBLIC_ENV, STORYBLOK_TOKEN_ACCESS} = loadEnv(import.meta.env.MODE, process.cwd(), "");

const baseComponents = {
  page: 'blocks/Page',
}

const faqsComponents = {
  faqs: 'components/Faqs/Faqs',
  faqsCategory: 'components/Faqs/FaqsCategory',
  faqsItem: 'components/Faqs/FaqsItem'
}

const blogComponents = {
  article: 'blocks/Article',
  blog: 'components/Blog/Blog',
}

const homeComponents = {
  hero: 'blocks/Hero',
  about: 'blocks/About',
  whyWe: 'blocks/WhyWe',
  whyWeItem: 'blocks/WhyWeItem',
  homePortfolio: 'blocks/Portfolio',
  process: 'blocks/Process',
  processItem: 'blocks/ProcessItem',
  stats: 'blocks/Stats',
  statsItem: 'blocks/StatsItem',
}

const contactsComponents = {
  contacts: 'blocks/Contacts',
  FormWrapper: 'blocks/FormWrapper',
  FormInput: 'blocks/FormInput',
  FormTextarea: 'blocks/FormTextarea'
}

const aboutComponents = {
  aboutHero: 'components/About/Hero',
  logoGrid: 'components/About/LogoList',
  steps: 'components/About/Steps',
  history: 'components/About/History',
}

const portfolioComponents = {
  category: 'components/Portfolio/Category',
  portfolio: 'components/Portfolio/Portfolio',
  portfolioItem: 'components/Portfolio/PortfolioItem',
}

const deliveryComponents = {
  deliveryHero: 'components/Delivery/Hero',
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), storyblok({
    accessToken: STORYBLOK_TOKEN_ACCESS,
    components: {
      ...baseComponents,
      ...blogComponents,
      ...homeComponents,
      ...contactsComponents,
      ...aboutComponents,
      ...faqsComponents,
      ...portfolioComponents,
      ...deliveryComponents
    }
  }), icon()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});