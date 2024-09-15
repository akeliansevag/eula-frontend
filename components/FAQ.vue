<template>
    <section id="faq" class="py-10 lg:py-20 bg-[#EFEFEF] relative">
        <img class="absolute z-0 top-0 object-cover w-full h-full" src="/public/img/gray-dot.webp" alt="Gray">
        <div data-aos="fade-up" class="container relative z-10">
            <h2 class="text-3xl font-semibold max-lg:text-center">FAQ</h2>
            <div>
                <div class="bg-[#f7f7f7] shadow-custom mt-4 rounded-xl p-3" v-for="(item, i) in items" :key="item.id">
                    <div>
                        <div class="cursor-pointer flex items-center gap-4 justify-between" @click="toggle(item.id)">
                            <div class="flex w-full">
                                <div class="lg:w-4/5">
                                    <h5 class="max-lg:text-[18px] text-[24px] font-bold mb-1">{{ item.question }}</h5>
                                </div>
                                <div>

                                </div>
                            </div>

                            <span>
                                <div class="relative">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="36.58"
                                            viewBox="0 0 33.801 47.555">
                                            <defs>
                                                <clipPath id="clip-path">
                                                    <rect id="Rectangle_158" data-name="Rectangle 158" width="33.801"
                                                        height="47.555" transform="translate(0 0)" fill="none" />
                                                </clipPath>
                                            </defs>
                                            <g id="Group_425" data-name="Group 425" transform="translate(0 -0.003)">
                                                <g id="Group_423" data-name="Group 423" transform="translate(0 0.003)"
                                                    clip-path="url(#clip-path)">
                                                    <path id="Path_159" data-name="Path 159"
                                                        d="M17.62.351a.918.918,0,0,0-1.44,0L12.168,5.88C9.314,9.816,0,23.233,0,30.658a16.9,16.9,0,0,0,33.8,0c0-7.424-9.316-20.841-12.168-24.777Z"
                                                        transform="translate(0 -0.003)" fill="#0078f4" />

                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="transition absolute bottom-0 left-[1px]"
                                        :class="activeItemId === item.id ? 'rotate-180' : 'rotate-0'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M18.5906 7.5L19.5 8.47031L12 16.5L4.5 8.47031L5.40469 7.5L12 14.5547L18.5906 7.5Z"
                                                fill="#ffffff" />
                                        </svg>
                                    </div>

                                </div>



                            </span>
                        </div>

                        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave"
                            @leave="leave">
                            <div v-if="activeItemId === item.id" class="content">
                                <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10">
                                    <div class="lg:col-span-4 order-2 lg:order-1">
                                        <!-- <div v-html="item.description" class="html-content"></div> -->
                                        <p>{{ item.answer }}</p>

                                    </div>
                                </div>

                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        id: 1,
        question: 'What makes EAULA different?',
        answer: 'EAULA’s model eliminates single-use plastics by using reusable glass bottles. We focus on creating a zero-waste, eco-friendly solution that is scalable, efficient, and tailored for businesses in the hospitality industry. Our commitment to sustainability sets us apart as we redefine how water is consumed.'
    },
    {
        id: 2,
        question: 'How do I know the water is safe?',
        answer: 'EAULA’s model eliminates single-use plastics by using reusable glass bottles. We focus on creating a zero-waste, eco-friendly solution that is scalable, efficient, and tailored for businesses in the hospitality industry. Our commitment to sustainability sets us apart as we redefine how water is consumed.'
    },
    {
        id: 3,
        question: 'How does EAULA help the planet?',
        answer: 'EAULA’s model eliminates single-use plastics by using reusable glass bottles. We focus on creating a zero-waste, eco-friendly solution that is scalable, efficient, and tailored for businesses in the hospitality industry. Our commitment to sustainability sets us apart as we redefine how water is consumed.'
    },
    {
        id: 4,
        question: 'Can I find EAULA water outside restaurants?',
        answer: 'EAULA’s model eliminates single-use plastics by using reusable glass bottles. We focus on creating a zero-waste, eco-friendly solution that is scalable, efficient, and tailored for businesses in the hospitality industry. Our commitment to sustainability sets us apart as we redefine how water is consumed.'
    }
];

const activeItemId = ref(1);

function toggle(itemId) {
    // If the clicked item is already active, close it, otherwise open the clicked one.
    activeItemId.value = activeItemId.value === itemId ? null : itemId;
}

function beforeEnter(el) {
    el.style.height = '0';
}

function enter(el, done) {
    setTimeout(() => {
        el.style.transition = 'height 0.3s ease';
        el.style.height = `${el.scrollHeight}px`;
        el.addEventListener('transitionend', done, { once: true });
    }, 100);

}

function beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
}

function leave(el, done) {
    el.style.transition = 'height 0.3s ease';
    setTimeout(() => {
        el.style.height = '0';
    });
    el.addEventListener('transitionend', done, { once: true });
}
</script>

<style scoped>
.content {
    overflow: hidden;
}
</style>