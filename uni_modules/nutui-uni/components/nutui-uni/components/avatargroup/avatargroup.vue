<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { PREFIX } from '../_constants'
import { useProvide } from '../_hooks'
import NutAvatar from '../avatar/avatar.vue'
import { AVATAR_KEY, avatargroupProps } from './avatargroup'

const props = defineProps(avatargroupProps)

const avatarGroupRef = ref(null)

const index = ref(0)

const foldCount = ref(99)
const observer = ref<MutationObserver>()
const styles = computed(() => {
  return {
    marginLeft: `${-1 * Number(props.span)}px`,
  }
})

const classes = computed(() => {
  const prefixCls = componentName
  return {
    [prefixCls]: true,
  }
})

useProvide(AVATAR_KEY, `${PREFIX}-avatar`)({ props, avatarGroupRef, index })
</script>

<script lang="ts">
const componentName = `${PREFIX}-avatar-group`

export default defineComponent({
  name: componentName,
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  },
})
</script>

<template>
  <view ref="avatarGroupRef" :class="classes">
    <slot />
    <NutAvatar
      v-if="foldCount > 0"
      class="avater-fold"
      :color="maxColor"
      :bg-color="maxBgColor"
      :size="size"
      :shape="shape"
      :style="{ magrinLeft: `${span}px` }"
    >
      {{ maxContent || foldCount }}
    </NutAvatar>
  </view>
</template>

<style lang="scss">
@import './index';
</style>
