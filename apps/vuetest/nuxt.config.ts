import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  srcDir: 'src',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  ssr: false,
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: '../tsconfig.app.json',
    },
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/styles.scss'],
  vite: {
    plugins: [nxViteTsPaths()],
  },
  extends: [
    '@study/increment',
    '@study/traffic',
    '@study/user-name',
    '@study/todo',
  ],
  plugins: ['plugins/vue-query'],
  router: {
    options: {
      hashMode: true,
    },
  },
  app: {
    baseURL: '/vue/',
  },
});

// npm i
// rm -rf apps/vuetest/.output
// npx nx run @study/vuetest:build --skip-nx-cache
