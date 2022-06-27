<template>
  <div class="_wrapper">
    <div class="_line" :key="item.name" v-for="(item, index) in PLUGINS">
      <div class="_left">
        <div :class="['_rank', ...getRankClass(index)]">
          {{ getRank(index) }}
        </div>
        <div :class="['_content', getContentCls(index)]">
          <img
            :src="getGithubAvatar(item.name)"
            :alt="item.name"
            class="_avatar"
          />
          <a class="_name" target="_blank" :href="getGithubIndex(item.name)">{{
            item.name
          }}</a>
        </div>
      </div>
      <div class="_right">
        {{ item.count || 0 }}
      </div>
    </div>
  </div>
</template>

<script>
import { PLUGINS } from '../ranking'

const MEDAL = ['🥇', '🥈', '🥉']
export default {
  data() {
    return {
      PLUGINS: Object.freeze(PLUGINS),
    }
  },
  methods: {
    getGithubAvatar(name) {
      return `https://avatars.githubusercontent.com/${name}`
    },
    getGithubIndex(name) {
      return `https://github.com/${name}`
    },
    getRank(num) {
      return MEDAL[num] || num + 1
    },
    getRankClass(index) {
      const cls = []
      if (index < 3) {
        cls.push('_expand')
      } else {
        cls.push('_offset')
      }
      if (index >= 9) {
        cls.push('_transform_rank')
      }
      return cls
    },
    getContentCls(idx) {
      if (idx >= 9) {
        return '_transform_content'
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
._wrapper {
  padding: 25px;
  border-radius: 3px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  display: inline-flex;
  flex-direction: column;
  max-width: 350px;
  width: 80vw;
}

.x_flex {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
}

._line {
  & + & {
    margin-top: 18px;
  }

  @extend .x_flex;
  justify-content: space-between;
}

._rank {
  padding-right: 10px;
}

._content {
  @extend .x_flex;

  padding-left: 5px;
  font-size: 15px;
}

._left {
  @extend .x_flex;
}

._avatar {
  $size: 25px;

  width: $size;
  height: $size;
  max-width: 100%;
  border-radius: 50%;

  user-select: none;
  pointer-events: none;
  cursor: default;
}

._name {
  padding-left: 10px;
  color: inherit;
  text-decoration: none !important;

  &:hover {
    color: #259bd9;
  }
}

._expand {
  font-size: 17px;
}

._offset {
  padding-left: 4px;
  padding-right: 13px;
}

// for rank >= 10 🤮
._transform_rank {
  transform: translateX(-3px);
}
._transform_content {
  padding-left: 0px;
}
</style>
