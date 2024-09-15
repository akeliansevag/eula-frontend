<template>
    <section class="bg-white py-10 lg:py-20">
        <div class="container">
            <h2 class="text-3xl font-semibold max-md:text-center">Supplier Certifications</h2>
            <div data-aos="zoom-in" class="max-lg:grid-cols-2 grid grid-cols-3 gap-8 mt-5">
                <div class="bg-[#ffffff] px-3 py-5 shadow-box rounded-xl text-center" v-for="item in items">
                    <img class="mx-auto mb-2" :src="item.logo" alt="Logo" />
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
 const items = [
    {
        logo: '/img/ce.webp',
        description: 'Dispensers conforms to European health, safety and environmental standards'
    },
    {
        logo: '/img/ecas.webp',
        description: 'Water is tested to ECAS standard'
    },
    {
        logo: '/img/fda.webp',
        description: 'FDA approved components and fittings'
    },
    {
        logo: '/img/iso.webp',
        description: 'Filters, dispensers and fittings manufactured in ISO Certified facilities'
    },
    {
        logo: '/img/nsf.webp',
        description: 'NSF Certified components and filter media'
    },
    {
        logo: '/img/ul.webp',
        description: 'European standard for electricity'
    },
    {
        logo: '/img/rohs.webp',
        description: 'ROHS approved UV LED Systems'
    },
    {
        logo: '/img/water-quality.webp',
        description: 'WQA Certified components'
    },
    {
        logo: '/img/wras.webp',
        description: 'British standard for all piping and fittings'
    }
 ]
</script>