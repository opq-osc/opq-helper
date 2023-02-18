<template>
  <div :class="['wrapper', isRowLayout && 'row']">
    <!-- lang -->
    <div :class="lineClass" v-if="lang">
      <div class="label">Language</div>
      <div class="lang">{{ lang }}</div>
    </div>
    <!-- repo -->
    <div :class="lineClass" v-if="repo">
      <div class="label">Repo</div>
      <a class="link" target="_blank" :href="`https://github.com/${repo}`">{{
        repo
      }}</a>
    </div>
    <!-- customLink -->
    <div :class="lineClass" v-if="customLink">
      <div class="label">{{ customLink[0] }}</div>
      <a class="link" target="_blank" :href="customLink[1]">{{
        customLink[2] || customLink[1]
      }}</a>
    </div>
    <!-- owner -->
    <div :class="[...lineClass, 'mobile_hide']" v-if="owner">
      <div class="label">Owner</div>
      <div class="owner" :title="handleOwner" @click="onOwnerClick">
        <img
          :src="`https://avatars.githubusercontent.com/${handleOwner}`"
          class="owner-img"
        />
        {{ handleOwner }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PluginInfo',
  props: {
    layout: String,
    lang: String,
    repo: String,
    owner: String,
    customLink: [String, String, String] /** label, link href, link label */,
  },
  computed: {
    handleOwner() {
      return this.owner || this.repo.split('/')[0]
    },
    isRowLayout({ layout }) {
      return layout === 'row'
    },
    lineClass({ isRowLayout }) {
      const classList = ['line']
      if (isRowLayout) {
        classList.push('line_row')
      } else {
        classList.push('line_column')
      }
      return classList
    },
  },
  methods: {
    onOwnerClick() {
      setTimeout(() => {
        window.open(
          `https://github.com/${this.handleOwner}`,
          '_blank',
          'noopener'
        )
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
  padding: 20px 30px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  min-width: 200px;

  &:hover {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
}

.row {
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    padding: 10px 15px;
    font-size: 13px;
  }
}

.mobile_hide {
  @media screen and (max-width: 600px) {
    display: none !important;
  }
}

.line_row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & + & {
    padding-left: 15px;
    margin-left: 15px;

    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
}

.line_column {
  & + & {
    margin-top: 20px;
  }
}

.line {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  .link {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .label {
    margin-right: 10px;
    font-weight: 450;
  }

  .lang {
    font-weight: 460;
  }

  .owner {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.4s linear;
    padding: 5px 8px;
    margin: -5px 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &-img {
      $size: 22px;

      border-radius: 50%;
      margin-right: 7px;
      width: $size;
      height: $size;
      flex-shrink: 0;
    }
  }
}
</style>
