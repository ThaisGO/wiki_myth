<template>
  <div class="min-h-screen bg-[#0f0f0f] text-[#e4e4e7]">

    <LoadingBar />

    <Sidebar />

    <main class="ml-80 min-h-screen">
      <article class="max-w-4xl mx-auto px-8 py-5">
        <slot />
      </article>
    </main>
  </div>
</template>