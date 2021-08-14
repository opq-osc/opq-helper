const execa = require('execa')
const { testSubmodule } = require('./utils')
const { convertWikiSidebarLinkToInternal } = require('./patch')

;(async () => {
  // 检测 submodule 是否初始化
  await testSubmodule()

  // patch submodule
  convertWikiSidebarLinkToInternal()

  // start project
  await execa.command('yarn dev:docs', { stdio: 'inherit' })
})()
