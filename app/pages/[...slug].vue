<script setup lang="ts">
const route = useRoute()
// const route = useRoute()

const { prev, next } = useNavigation(route.path)

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>

  <div>

    <article class="wiki-content">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </article>

    <div
      class="mt-16 flex items-center justify-between border-t border-[#262626] pt-8"
    >

      <!-- Previous -->
      <NuxtLink
        v-if="prev"
        :to="prev.to"
        class="group flex items-center gap-3 text-[#a1a1aa] transition-colors hover:text-[#4ade80]"
      >
        <span class="text-xl transition-transform group-hover:-translate-x-1">
          ←
        </span>

        <div>
          <p class="text-xs uppercase text-[#71717a]">
            Página anterior
          </p>

          <p class="font-medium">
            {{ prev.title }}
          </p>
        </div>
      </NuxtLink>

      <div v-else />

      <!-- Next -->
      <NuxtLink
        v-if="next"
        :to="next.to"
        class="group ml-auto flex items-center gap-3 text-right text-[#a1a1aa] transition-colors hover:text-[#4ade80]"
      >

        <div>
          <p class="text-xs uppercase text-[#71717a]">
            Próxima página
          </p>

          <p class="font-medium">
            {{ next.title }}
          </p>
        </div>

        <span class="text-xl transition-transform group-hover:translate-x-1">
          →
        </span>

      </NuxtLink>

    </div>

  </div>

</template>
