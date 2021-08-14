const execa = require('execa')
const chalk = require('chalk')

const { log } = require('./log')
const { testSubmodule } = require('./utils')
const { convertWikiSidebarLinkToInternal } = require('./patch')

;(async () => {
  // 初始化 submodule
  await testSubmodule()

  // update 到最新版 submodule
  log(chalk.yellow('🍵 开始更新 submodule 到分支最新 commit'))
  await execa.command('yarn submodule:update', { stdio: 'inherit' })
  log(chalk.green('👍 submodule 已被更新到最新版'))

  // 整理 wiki sidebar
  log(chalk.yellow('🍵 开始整理 submodule wiki 内容'))
  convertWikiSidebarLinkToInternal()
  log(chalk.green('👍 submodule wiki 整理完毕'))

  // 打包
  log(chalk.yellow('🍵 开始打包'))
  await execa.command('yarn build:docs', { stdio: 'inherit' })
  log(chalk.green('🚀 打包完毕，一切就绪！'))
})()
