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
  description: 'Every sip helps build a healthier planet.',
  ogDescription: 'Every sip helps build a healthier planet.',
  //   ogImage: 'https://montyholding.com/ogimage.webp',
  //   twitterCard: 'summary_large_image',
})
</script>