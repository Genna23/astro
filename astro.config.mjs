import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from "astro-icon";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";

const STORYBLOK_TOKEN_ACCESS = "jH8ZNSX96r6za283vZjPTwtt"

const baseComponents = {
  page: 'components/Page',
  faqsComponent: 'components/Base/Faqs/Faqs',
  faqsComponentItem: 'components/Base/Faqs/FaqsItem',
  config: 'components/Base/Config',
  seo: 'components/Base/Seo',
  richText: 'components/Base/RichText'
};
const faqsComponents = {
  faqs: 'components/Faqs/Faqs',
  faqsCategory: 'components/Faqs/FaqsCategory',
  faqsItem: 'components/Faqs/FaqsItem'
};
const blogComponents = {
  article: 'components/Blog/Article',
  blog: 'components/Blog/Blog'
};
const homeComponents = {
  hero: 'components/Home/Hero',
  about: 'components/Home/About',
  whyWe: 'components/Home/WhyWe',
  whyWeItem: 'components/Home/WhyWeItem',
  homePortfolio: 'components/Home/Portfolio',
  process: 'components/Home/Process',
  processItem: 'components/Home/ProcessCard',
  stats: 'components/Home/Stats',
  statsItem: 'components/Home/StatsItem'
};
const aboutComponents = {
  aboutHero: 'components/About/Hero',
  logoGrid: 'components/About/LogoList',
  steps: 'components/About/Steps',
  history: 'components/About/History'
};
const portfolioComponents = {
  category: 'components/Portfolio/Category',
  portfolio: 'components/Portfolio/Portfolio',
  portfolioItem: 'components/Portfolio/PortfolioItem'
};
const deliveryComponents = {
  deliveryHero: 'components/Delivery/Hero',
  deliverySteps: 'components/Delivery/Steps',
  deliveryStepsItem: 'components/Delivery/StepsItem',
  deliveryMethods: 'components/Delivery/Methods',
  deliveryMethodsItem: 'components/Delivery/MethodsItem',
  deliveryConditions: 'components/Delivery/Conditions'
};


// https://astro.build/config
export default defineConfig({
  site: "https://charm-wood.ru",
  integrations: [tailwind(), storyblok({
    accessToken: STORYBLOK_TOKEN_ACCESS,
    components: {
      ...baseComponents,
      ...blogComponents,
      ...homeComponents,
      ...aboutComponents,
      ...faqsComponents,
      ...portfolioComponents,
      ...deliveryComponents
    }
  }), icon(), sitemap({
    filter: (page) => page !== 'https://charm-wood.ru/portfolio' && page.includes('portfolio'),
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});