<template>
    <div class="show-more">
        <div class="section-title-container">
            <p class="section-title">
                <slot name="section-name"></slot>
            </p>
            <!-- <img class="show-more-btn-img" @click="show = !show" :src="imgSrc"> -->
            <!-- <div class="overlay"></div> -->
            <div v-if="isLawSection">
                <iframe :id="uniqueId" :src="`${publicPath}animations/lawBtn/lawBtn.html?id=`+ uniqueId" class="show-more-btn-img" scrolling="no"></iframe>
            </div>
            <div v-else>
                <iframe :id="uniqueId" :src="`${publicPath}animations/ideaBtn/ideaBtn.html?id=`+ uniqueId" class="show-more-btn-img did-you-know-btn-img" scrolling="no"></iframe>
            </div>
            <!-- <div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:640px; height:480px" @click="show = !show">
		        <canvas id="canvas" width="640" height="480" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
		        <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:640px; height:480px; position: absolute; left: 0px; top: 0px; display: block;">
		        </div>
	        </div> -->
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
        clicked(event) {
            if(event.source.frameElement.id === this.uniqueId) {
                setTimeout(() => {
                    this.show = !this.show;
                }, 700); 
            }
        }
    },
    computed: {
        imgSrc(){
            if(this.isLawSection) 
                return require("../../media/graphics/colorLaw.svg")
            else 
                return require("../../media/graphics/idea.svg")
        },
        idLength(){
            return this.uniqueId.length;
        }
    },
    created() {
        window.addEventListener('message', this.clicked, false)
    },
    unmounted(){
        window.removeEventListener('message', this.clicked, false);
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
    height: 120%;
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

.did-you-know-btn-img {
    height: 120%;
    width: 120%;
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
.button-text {
    width: 12%;
    position: absolute;
    left: -1%;
    top: -15%;
    font-size: 0.8em;
    text-align: center;
    line-height: 1em;
    z-index: 2;
}
.did-you-know-btn-txt {
    top: -40%;
    left: -2%;
}
</style>