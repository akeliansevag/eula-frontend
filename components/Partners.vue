<template>
    <section class="bg-white py-10 lg:py-20">
        <div data-aos="fade-down" class="container">
            <h2 class="text-3xl font-semibold max-lg:text-center">Partners</h2>
            <div class="flex flex-wrap max-lg:justify-center items-center gap-12 mt-4">
                <div class="max-w-[140px]" v-for="(logo,index) in logos" :key="index">
                    <img :src="`/img/${logo}`" alt="">
                </div>
           </div>
        </div>
    </section>
</template>

<script setup>
    const logos = [
        'paul.webp',
        'soul-kitchen.webp',
        '100.webp',
        '5.webp',
        '17.webp',
        '16.webp',
        '2222.webp',
        'safadi.webp',
        'awani.webp',
        'catch.webp',
        
        'thea.webp',
        'smoky.webp',
        '1.webp',
        '3.webp',
        '4.webp',
        '6.webp',
        '7.webp',
        '8.webp',
        '9.webp',
        '11.webp',
        '12.webp',
        '13.webp',
        '14.webp',
        '15.webp',
        
    ]
</script>