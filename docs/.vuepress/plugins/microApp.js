import { registerMicroApps } from 'qiankun'
import { MICRO_APP_ELM } from '../constants'

registerMicroApps([
  {
    name: 'opqbot-notify',
    entry: '//cdn.jsdelivr.net/gh/opq-osc/opqbot-notify@gh-pages/index.html', // '//localhost:9528'
    container: `#${MICRO_APP_ELM}`,
    activeRule: '/',
  },
])
