import { MICRO_APP_ELM } from '../constants'

export const start = async () => {
  const { registerMicroApps, start } = await import('qiankun')
  registerMicroApps([
    {
      name: 'opqbot-notify',
      entry:
        '//fastly.jsdelivr.net/gh/opq-osc/opqbot-notify@gh-pages/index.html', // '//localhost:9528'
      container: `#${MICRO_APP_ELM}`,
      activeRule: '/',
    },
  ])
  start()
}
