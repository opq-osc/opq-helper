<template>
  <div class="wrapper">
    <div class="line">
      <div class="label">Language:</div>
      <div class="lang">{{ lang }}</div>
    </div>
    <div class="line">
      <div class="label">Repo:</div>
      <a target="_blank" :href="`https://github.com/${repo}`">{{ repo }}</a>
    </div>
    <div class="line">
      <div class="label">Owner:</div>
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
    lang: String,
    repo: String,
    owner: String,
  },
  computed: {
    handleOwner() {
      return this.owner || this.repo.split('/')[0]
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
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .15);
  padding: 15px 20px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all .4s ease-in-out;

  &:hover {
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, .2);
    transform: translateY(-2px);
  }
}

.line {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  & + & {
    margin-top: 20px;
  }

  .label {
    margin-right: 5px;
  }

  .lang {
    font-weight: 460;
    font-style: italic;
  }

  .owner {
    display: flex;
    flex-wrap: nowrap;
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
      $size: 25px;

      border-radius: 50%;
      margin-right: 5px;
      width: $size;
      height: $size;
      flex-shrink: 0;
    }
  }
}
</style>
