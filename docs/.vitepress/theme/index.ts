import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/vars.css'

// @ts-ignore
import PluginInfo from '../components/PluginInfo.vue'
// @ts-ignore
import Badge from '../compatible/Badge.vue'
// @ts-ignore
import PluginRanking from '../components/PluginRanking.vue'
// @ts-ignore
import Link from '../components/Link.vue'

const components = {
  PluginInfo,
  Badge,
  PluginRanking,
  Link
}

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
    })
  },
  enhanceApp({ app }) {
    Object.keys(components).forEach(c => {
      app.component(c, components[c])
    })
  }
}