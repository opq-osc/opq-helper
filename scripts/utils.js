const path = require('path')
const chalk = require('chalk')
const execa = require('execa')
const fs = require('fs-extra')

const { submoduleSidebarFilePath } = require('./patch')
const { log } = require('./log')

const getFilenameWithoutExt = (filename) => {
  const ext = path.extname(filename)
  if (!ext) {
    return filename
  }
  const splitIdx = filename.indexOf(ext)
  return filename.slice(0, splitIdx)
}

/**
 * 检测 submodule 是否存在，若不存在，则初始化
 */
async function testSubmodule() {
  const isSubmoduleExist = fs.existsSync(submoduleSidebarFilePath)
  log(chalk.yellow('🍵 开始初始化 submodule repo'))
  if (!isSubmoduleExist) {
    // 初始化 submodule
    await execa.command('yarn submodule:init', { stdio: 'inherit' })
  }
  log(chalk.green('👍 初始化 submodule repo 完毕'))
}

module.exports = {
  getFilenameWithoutExt,
  testSubmodule,
}
