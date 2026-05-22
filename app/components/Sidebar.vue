<script setup>
import { ref } from 'vue'
import { navigation } from '@/data/navigation'

const expandedSections = ref({
  gameGuide: true,
  classBuild: false
})

const toggleSection = (section) => {
  expandedSections.value[section] =
    !expandedSections.value[section]
}
</script>

<template>
    <aside class="fixed left-0 top-0 h-screen lg:w-80 md:w-64 flex-shrink-0 bg-[#141414] border-r border-[#262626] overflow-y-auto">
    <div class="p-6">
      <div class="flex items-center gap-3 mb-8 pb-6 border-b border-[#262626]">
        <img src="/logo.png" alt="Logo" class="w-12 h-12 rounded-lg" />

        <div>
          <h1 class="text-xl font-semibold text-[#a7f3d0]"> Myth of Yggdrasil </h1>
          <p class="text-sm text-[#a1a1aa]"> Wiki </p>
        </div>
      </div>

      <nav class="space-y-6">
        <div v-for="section in navigation" :key="section.title"
          class="border-t border-[#262626] pt-4 first:border-none first:pt-0">

          <template v-if="section.children">
            <button
              @click="toggleSection(section.key)"
              class="mb-3 flex w-full items-center justify-between text-left text-base font-semibold text-[#a7f3d0] transition-colors hover:text-[#86efac]">

              <span>{{ section.title }}</span>

              <span class="text-lg">
                {{ expandedSections[section.key] ? '−' : '+' }}
              </span>
            </button>

            <ul v-if="expandedSections[section.key]" class="ml-4 space-y-2 border-l-2 border-[#262626] pl-4">
              <li v-for="link in section.children" :key="link.to">
                <NuxtLink :to="link.to" class="sidebar-link" active-class="text-green-500">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </template>

           <!-- Single link -->
          <template v-else>

            <NuxtLink :to="section.to" class="block text-base font-semibold text-[#a7f3d0] hover:text-[#86efac]">
              {{ section.title }}
            </NuxtLink>
          </template>
        </div>
      </nav>
    </div>
  </aside>
</template>


