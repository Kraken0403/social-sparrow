<template>
    <section ref="contactHero" class="relative contact-hero w-full">
        <div class="contact-title">
            <h1 class="text-center leading-1">Get in Touch</h1>
            <p class="pt-[30px]">Let's meet up</p>
        </div>
       
    </section>
</template>

<style scoped>
.contact-hero {
    position: relative;
    height: 85vh;
    background: #fff;
    /* background: #A3FF12; */
    /* background: #FF7300; */
    /* background:  #4E008E ; */
    overflow: hidden;

}
.contact-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 220px;
    font-weight: bold;
    color: #1a1a1a;
    pointer-events: none;
    z-index: 1;
}

.contact-title h1 {
    line-height: 0.9;
    text-transform: uppercase;
}

.contact-title p {
    padding-top: 30px;
    font-size: 22px;
    text-align: center;
}

</style>