import { h } from 'vue'
import Theme from 'vitepress/theme'
import './styles/vars.css'
import './styles/global.scss'

// @ts-ignore
import Link from '../components/Link.vue'
// @ts-ignore
import IndexMounted from '../components/IndexMounted.vue'

const components = {
  Link,
  IndexMounted,
}

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    Object.keys(components).forEach((c) => {
      app.component(c, components[c])
    })
  },
}
