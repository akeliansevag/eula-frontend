<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'eaula',
  ogTitle: 'eaula',
  description: 'NOTHING TASTES BETTER',
  ogDescription: 'NOTHING TASTES BETTER',
    ogImage: 'https://www.eaulawater.com/img/eaula-banner.webp',
    twitterCard: 'summary_large_image',
})
</script>