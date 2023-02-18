import 'zx/globals'
// https://github.com/vuejs/vitepress/blob/5c9b75e325c27f63373c969e16035a9df5292cc9/src/node/markdown/markdown.ts#L13
import { slugify } from '@mdit-vue/shared'

const run = async () => {
  const filePath = path.join(__dirname, '../docs/project/plugins.md')
  const content = fs.readFileSync(filePath, 'utf-8')

  const lines = content.split('\n')
  const newLines = lines.map((line) => {
    if (line.startsWith('##')) {
      const isT = line.includes('<T')
      if (isT) {
        return line
      }
      const trim = line.replace('##', '').trim()
      const title = trim.replace(/\(.+?\)/, '').trim()
      const lang = trim
        .match(/\((.+?)\)/)?.[1]
        ?.trim()
        ?.toLowerCase()
      const newLine = `## <T lang="${lang}" title="${title}" />`
      return newLine
    }
    return line
  })
  const newContent = newLines.join('\n')

  // split block
  const blocks = newContent.split('\n## <T')
  const map = {
    start: '',
    langs: {} as Record<string, Array<{ title: string; content: string }>>,
    end: '',
  }
  blocks.forEach((block) => {
    const isNeedTransformBlock = block.trim().startsWith('lang=')
    if (!isNeedTransformBlock) {
      // start or end
      const isLangsEmpty = Object.keys(map.langs).length === 0
      // end
      if (!isLangsEmpty) {
        map.end = `${map.end}${block}`
      } else {
        // start
        map.start = `${map.start}${block}`
      }
      return
    }
    // is plugin block
    const lines = block.split('\n')
    const firstLine = lines[0]
    const title = firstLine.match(/title="(.+?)"/)?.[1]?.trim()!
    const lang = firstLine.match(/lang="(.+?)"/)?.[1]?.trim()!
    // add to map
    const hasLang = map.langs?.[lang]
    const obj = {
      title,
      content: `## <T${block}\n`,
    }
    if (hasLang) {
      map.langs[lang].push(obj)
    } else {
      map.langs[lang] = [obj]
    }
  })
  // sort
  Object.keys(map.langs).forEach((key) => {
    const list = map.langs[key]
    map.langs[key] = list.sort((a, b) => {
      return a.title.localeCompare(b.title)
    })
  })
  // patch
  const pluginsContent = Object.keys(map.langs).map(key => {
    const list = map.langs[key]
    return list.map(item => item.content).join('')
  }).join('\n')
  const resultContent = `${map.start}\n${pluginsContent}\n${map.end}`
  // write
  fs.writeFileSync(filePath, resultContent, 'utf-8')

  // get all menus
  const linesForMenu = resultContent.split('\n')
  const menus: any[] = []
  linesForMenu.forEach((line) => {
    const isTitle = line.startsWith('##')
    if (!isTitle) {
      return
    }
    const lineContent = line.replace('##', '').trim()
    const title = lineContent.match(/title="(.+?)"/)?.[1]?.trim()!
    const slug = slugify(title)
    menus.push({
      text: title,
      link: `project/plugins.html#${slug}`,
    })
  })
  // write menu file
  const menuDir = path.join(__dirname, '../docs/.vitepress/menu')
  if (!fs.existsSync(menuDir)) {
    fs.mkdirSync(menuDir)
  }
  const menuPath = path.join(menuDir, 'plugins.ts')
  fs.writeFileSync(menuPath, `export default ${JSON.stringify(menus, null, 2)}\n`, 'utf-8')
}

run()
