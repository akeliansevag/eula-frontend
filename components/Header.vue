<template>
    <header class="transition-all fixed -top-[1px] w-full z-50"
        :class="scrolled ? 'h-[70px] bg-white shadow-custom' : 'bg-transparent h-[90px]'">
        <div class="container flex items-center justify-between h-full">
            <div class="z-10">
                <a @click="goToTop($event)" class="block" href="#">
                    <img class="transition-all" :class="scrolled ? 'h-[40px]' : 'h-[50px]'" src="/public/img/logo.webp"
                        alt="Logo">
                </a>

            </div>
            <div
                :class="`fixed lg:relative w-full h-full lg:w-auto lg:h-auto bg-white lg:bg-transparent top-0 transition-all ${menuOpen ? 'left-0' : '-left-full lg:left-auto'}`">
                <ul
                    class="flex flex-col items-center text-xl font-bold lg:text-base lg:font-normal lg:flex-row px-4 lg:px-0 mt-[120px] lg:mt-0 gap-10">
                    <li><a @click="goToTop($event)" href="#">Home</a></li>
                    <li><a @click="goTo($event, 'our-story')" href="#">Our Story</a></li>
                    <li><a @click="goTo($event, 'our-dna')" href="#">Our DNA</a></li>
                    <li><a @click="goTo($event, 'faq')" href="#">FAQ</a></li>
                    <li><a @click="goTo($event, 'contact-us')" href="#">Contact us</a></li>
                </ul>
            </div>
            <button @click="toggleMenu" class="hamburger focus:outline-none lg:hidden">
                <div :class="menuOpen ? 'open' : ''" class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const menuOpen = ref(false);

const goToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    menuOpen.value = false;
}
const goTo = (e, to) => {
    e.preventDefault();
    menuOpen.value = false;
    if (to) {
        const element = document.getElementById(to);
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

onMounted(() => {
    const handleScroll = () => {
        scrolled.value = window.scrollY !== 0;
    };

    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

});
</script>

<style scoped>
.hamburger-icon {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
}

.hamburger-icon span {
    display: block;
    width: 100%;
    height: 4px;
    background: #0078F4;
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
}

.hamburger-icon.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
    position: absolute;
}

.hamburger-icon.open span:nth-child(2) {
    opacity: 0;
}

.hamburger-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 8px;
    position: absolute;
}
</style>