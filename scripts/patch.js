const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const { pathchLog } = require('./log')

const submoduleSidebarFilePath = path.resolve(
  __dirname,
  '../docs/opq-wiki/_Sidebar.md'
)
const sidebarCurrentDir = path.dirname(submoduleSidebarFilePath)

/**
 * auto patch 逻辑
 * 1.会把绝对 url 连接换为相对 md 链接
 * 2 给子页面添加返回按钮
 */
function convertWikiSidebarLinkToInternal() {
  // 把连接换成相对的
  const content = fs.readFileSync(submoduleSidebarFilePath, 'utf-8')
  const willConvert = [
    {
      before: 'https://github.com/OPQBOT/OPQ/wiki',
      after: '.',
    },
  ]

  pathchLog(chalk.yellow('🍵 准备将 md 绝对路径换为相对路径'))
  let newContent = content
  willConvert.forEach((convert) => {
    newContent = newContent.replace(
      new RegExp(convert.before, 'gi'),
      convert.after
    )
  })
  pathchLog(chalk.green('👍 索引页相对路径替换完毕'))

  // 把 (.) 去了，这个无效
  pathchLog(chalk.yellow('🍵 准备去除无效 link (.) (./) '))
  const willFilterLink = ['(.)', '(./)']
  const lines = newContent.split('\n')
  const filteredLines = []
  lines.forEach((line) => {
    const hasKeyword = willFilterLink.some((keyword) => line.includes(keyword))
    if (hasKeyword) {
      return
    }
    filteredLines.push(line)
  })
  newContent = filteredLines.join('\n')
  fs.writeFileSync(submoduleSidebarFilePath, newContent)
  pathchLog(chalk.green('👍 无效 link 已去除'))

  // 把其他文件头处理下，并加上返回按钮
  pathchLog(chalk.yellow('🍵 准备给子页面附加模板代码'))
  const filenames = fs.readdirSync(sidebarCurrentDir)
  filenames.forEach((filename) => {
    const filePath = path.join(sidebarCurrentDir, filename)
    if (filePath === submoduleSidebarFilePath) {
      return
    }
    const mdContent = fs.readFileSync(filePath, 'utf-8')
    let newMdContent = mdContent
    if (!newMdContent.includes('<BackWikiBtn />')) {
      newMdContent = `
---
sidebar: false
---

<BackWikiBtn />

${newMdContent}
  `
    }
    fs.writeFileSync(filePath, newMdContent.trimStart())
  })
  pathchLog(chalk.green('👍 子页面模板代码已附加完毕'))
}

module.exports = {
  convertWikiSidebarLinkToInternal,
  submoduleSidebarFilePath,
  sidebarCurrentDir,
}
