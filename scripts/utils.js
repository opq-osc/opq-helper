const path = require('path')
const chalk = require('chalk')
const execa = require('execa')
const fs = require('fs-extra')

const { submoduleSidebarFilesPath } = require('./patch')
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

  const single = (filePath) => {
    const isSubmoduleExist = fs.existsSync(filePath)
    if (!isSubmoduleExist) {
      // 初始化 submodule
      execa.commandSync('yarn submodule:init', { stdio: 'inherit' })
      // update submodule
      execa.commandSync('yarn submodule:update', { stdio: 'inherit' })
    }
  }
  submoduleSidebarFilesPath.forEach(({ path: filePath }) => {
    log(chalk.yellow(`🍵 开始初始化 submodule repo: ${path.basename(path.dirname(filePath))} `))
    single(filePath)
  })
  log(chalk.green('👍 初始化 submodule repo 完毕'))

}

module.exports = {
  getFilenameWithoutExt,
  testSubmodule,
}
