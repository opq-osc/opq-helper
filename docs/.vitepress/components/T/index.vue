<template>
  <div ref="ref" class="box">
    <img v-if="lang === 'python'" :src="icons.python" alt="python" />
    <img v-if="lang === 'go'" :src="icons.go" alt="go" />
    <img v-if="lang === 'csharp'" :src="icons.csharp" alt="csharp" />
    <img v-if="lang === 'lua'" :src="icons.lua" alt="lua" />
    <img v-if="lang === 'php'" :src="icons.php" alt="php" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { slugify } from '@mdit-vue/shared'
// @ts-ignore
import pythonUrl from './icons/python.svg'
// @ts-ignore
import goUrl from './icons/go.svg'
// @ts-ignore
import csharpUrl from './icons/csharp.svg'
// @ts-ignore
import luaUrl from './icons/lua.svg'
// @ts-ignore
import phpUrl from './icons/php.svg'

export default defineComponent({
  props: {
    lang: String,
    title: String,
  },
  computed: {
    icons() {
      return {
        python: pythonUrl,
        go: goUrl,
        csharp: csharpUrl,
        lua: luaUrl,
        php: phpUrl,
      }
    },
  },
  mounted() {
    // patch next a tag href
    const elm = this.$refs.ref as HTMLElement
    const nextElm = elm.nextElementSibling as HTMLAnchorElement
    const isATag = nextElm && nextElm.tagName === 'A'
    const slug = slugify(this.title)
    if (isATag) {
      nextElm.href = `#${slug}`
    }

    // parent id patch
    const parentElm = elm.parentElement as HTMLElement
    if (parentElm) {
      parentElm.id = slug
    }

    // check url hash and scroll to it
    const hash = window.location.hash
    if (hash === `#${slug}`) {
      setTimeout(() => {
        const postion = elm.getBoundingClientRect().top
        window.scrollTo(0, window.scrollY + postion - 100)
      }, 100)
    }
  },
})
</script>

<style scoped lang="scss">
.box {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;

  > img {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.3em;
  }
}
</style>
