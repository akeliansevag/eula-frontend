<template>
    <section class="relative min-h-screen flex items-center">
        <img class="absolute -z-10 top-0 w-full max-lg:hidden left-0 object-cover h-full"
            src="/public/img/eaula-banner.webp" alt="Banner">

        <img class="absolute -z-10 top-0 w-full max-lg:block object-right hidden left-0 object-cover h-full"
            src="/public/img/phone-cover2.webp" alt="Banner">

        <div class="hidden max-lg:block absolute top-0 left-0 bg-[#ffffff] bg-opacity-50 w-full h-full z-10"></div>
        <div data-aos="fade-up" class="container relative z-20">
            <div class="max-lg:w-full w-2/3">
                <h1 class="max-lg:text-6xl font-semibold text-8xl">NOTHING <br /> TASTES <br /> BETTER</h1>
                <div class="max-lg:flex-col mt-4 flex gap-6">
                    <div class="flex gap-2 items-center">
                        <span>
                            <img src="/public/img/i1.svg" alt="Icon">
                        </span>
                        <span class="max-lg:text-base text-xl">Pure water</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span>
                            <img src="/public/img/i2.svg" alt="Icon">

                        </span>
                        <span class="max-lg:text-base text-xl">Zero plastic</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span>
                            <img src="/public/img/i3.svg" alt="Icon">
                        </span>
                        <span class="max-lg:text-base text-xl">100% sustainable</span>
                    </div>
                </div>
            </div>
            <h2 class="max-lg:mt-10 mt-36 max-lg:hidden text-2xl italic">
                “Every sip helps build a healthier planet.”
            </h2>

            <h2 class="max-lg:mt-10 mt-36 max-lg:block hidden text-md italic">
                “Every sip helps build <br /> a healthier planet.”
            </h2>
        </div>

    </section>
</template>

<script setup>

</script>
