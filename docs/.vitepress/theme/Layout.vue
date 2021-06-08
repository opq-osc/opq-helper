<template>
  <ParentLayout /> 
</template>

<script>
import DefaultTheme from 'vitepress/dist/client/theme-default'

export default {
  name: 'Layout',
  components: {
    ParentLayout: DefaultTheme.Layout,
  },
  setup() {
  },
}
</script>

<style>
</style>
