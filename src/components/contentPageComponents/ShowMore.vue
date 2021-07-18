<template>
    <div class="show-more">
        <div class="section-title-container">
            <p class="section-title">
                <slot name="section-name"></slot>
            </p>
            <!-- <img class="show-more-btn-img" @click="show = !show" :src="imgSrc"> -->
            <!-- <div class="overlay"></div> -->
        </div>
        <div :class="isLawSection ? 'law-style' : 'did-u-know-style'" v-show="show">
            <slot name="section-content"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ShowMore',
    props: {
        isLawSection: {
            type: Boolean,
            required: true,
        },
        uniqueId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            show: false,
            publicPath: process.env.BASE_URL,
        }
    },
    methods: {

    },
    computed: {
        imgSrc(){
            if(this.isLawSection) 
                return require("../../media/graphics/colorLaw.svg")
            else 
                return require("../../media/graphics/idea.svg")
        },
    },
    created() {

    }
}
</script>

<style scoped>
.show-more {
    margin: 2vmin;
}

.section-title-container {
     position: relative;
     height: 6.6vmin;
   /* margin-bottom: 0; */
}

.section-title {
    background-color: var(--blue);
    height: fit-content;
    width: fit-content;
    padding: 0 1vh;
    position: absolute;
    bottom: 0;
    margin: 0;
}

.show-more-btn-img {
    /* height: 250%; */
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    border: none;
    overflow: hidden;
    cursor: pointer;
}

.law-style {
    margin: 0;
    background-color: rgba(46, 196, 182, 0.1);
    font-weight: lighter;
    padding: 2vmin;
}

.did-u-know-style {
    position: relative;
    top: -1.5vmin;
    background-color: rgba(253, 184, 51, 0.1);
    font-weight: bold;
    padding: 1em;
}
</style>