<template>
    <section id="our-dna" class="py-10 lg:py-20 relative bg-[#023A80] text-white">
        <img class="absolute top-0 object-cover w-full h-full z-10" src="/public/img/ourdnabg.webp" alt="Background">
        <div class="container relative z-20">
            <div class="flex max-lg:flex-col max-lg:gap-10 gap-20">
                <div class="max-lg:w-full w-1/3 max-lg:text-center">
                    <h2 class="text-3xl font-semibold">Our DNA</h2>
                    <p>
                        Eaula water is crafted with the finest Italian technology and tech-powered precision,
                        ensuring unmatched quality and standards. Certified by global organizations, our water embodies
                        the
                        perfect blend of innovation
                        and sustainability.
                    </p>
                </div>
                <div class="max-lg:w-full w-2/3">
                    <img class="w-full" src="/public/img/ourdna1.webp" alt="Our DNA">
                </div>
            </div>
            <h2 class="text-3xl font-semibold mt-10 max-lg:text-center">Behind the Purity</h2>
            <div class="flex mt-10 max-lg:flex-col max-lg:items-center gap-10 relative">
                <div
                    class="absolute w-[70%] h-[2px] border-dotted border-[1px] border-[#0078F4] top-[25%] z-0 left-1/2 -translate-x-1/2 max-lg:hidden">
                </div>
                <div v-for="step in steps" class="relative z-10 w-1/2 max-lg:w-full flex flex-col text-center">
                    <div>
                        <img class="mx-auto" :src="step.img" alt="DNA">
                        <div class="bg-[#0078F4] h-[40px] w-[1px] mx-auto"></div>
                        <h3 class="text-[#0078F4] font-semibold text-xl">{{ step.title }}</h3>
                        <h4 class="mt-2 font-semibold text-lg">{{ step.subtitle }}</h4>
                        <p>{{ step.description }}</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    {
        img: '/img/purity1.webp',
        title: 'Step 1',
        subtitle: 'Advanced Filtration Installation',
        description: 'We deploy cutting-edge Italian water systems, filters, and sensors to guarantee the purest water while retaining a healthy mineral content'
    },
    {
        img: '/img/purity2.webp',
        subtitle: 'Bottling with Sustainability',
        title: 'Step 2',
        description: 'Our water is carefully bottled in eco-friendly, reusable glass containers, keeping it pure and sustainable'
    },
    {
        img: '/img/purity3.webp',
        subtitle: 'Continuous Quality Control',
        title: 'Step 3',
        description: 'Every drop is filtered and monitored with advanced technology to ensure the highest quality, always'
    }
];
</script>