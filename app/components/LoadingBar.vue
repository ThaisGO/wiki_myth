<script setup>
const loading = useLoadingIndicator({
  duration: 2000,
  throttle: 200
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="loading.isLoading.value"
      class="fixed left-0 top-0 z-[9999] h-1 w-full overflow-hidden bg-transparent"
    >
      <div
        class="h-full animate-pulse bg-[#4ade80]"
        :style="{
          width: `${loading.progress.value}%`
        }"
      />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>