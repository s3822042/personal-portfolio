import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkUnwrapImages from 'remark-unwrap-images';
import addClasses from 'rehype-add-classes';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://luanvothanh.com',
  integrations: [
      expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx(),
    icon(),
    react()
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [[addClasses, {
      h1: 'text-4xl font-bold font-satoshi',
      h2: 'text-2xl font-bold font-satoshi',
      h3: 'text-xl font-bold font-satoshi',
      h4: 'text-lg font-bold font-satoshi',
      h5: 'font-bold font-satoshi',
      h6: 'font-bold font-satoshi',
      img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
      p: 'mb-6',
      a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
      ul: 'list-disc'
    }]],
    remarkRehype: {
      footnoteLabelProperties: {
        className: ['']
      }
    }
  },
  prefetch: true,
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
