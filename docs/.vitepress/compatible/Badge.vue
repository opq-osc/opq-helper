<template>
  <div class="_badge" :class="color">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
  },
  computed: {
    color({ type }) {
      if (type === 'warning') {
        return 'warning'
      }
      if (type === 'legacy') {
        return 'legacy'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
._badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1px 8px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  transform: translate(5%, -50%);
}

.warning {
  background-color: #e7c000;
  color: #fff;
}

.legacy {
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
}
</style>
