import DefaultTheme from 'vitepress/dist/client/theme-default'
import Layout from './Layout.vue'

// custom components
import PluginInfo from '../components/PluginInfo.vue'

// global style
import './global.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.component('PluginInfo', PluginInfo)
  }
}