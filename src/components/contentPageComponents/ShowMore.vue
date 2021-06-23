<template>
    <div>
        <div class="section-title-container">
            <p class="section-title">
                <slot name="section-name"></slot>
            </p>
            <img class="show-more-btn-img" @click="show = !show" :src="imgSrc">
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
    },
    data() {
        return {
            show: false,
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
}
</script>

<style scoped>
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
    position: absolute;
    left: 0;
    bottom: 0;
    cursor: pointer;
}

.show-more-btn-img:hover {
    /* height: 260%; */
    height: 7vmin;
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