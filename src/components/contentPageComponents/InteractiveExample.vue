<template>
    <div class="interactive-example">
        <div class="example-container">
            <div class="example-help">
                <div class="example-help-mark">?</div>
                <div>לחצו על כל אחד מהשלבים על מנת לראות כיצד הוא משפיע על סעיף 20</div>
            </div>
            <div class="change-to-text" @click="changeToText">
                <div v-show="!onlyText" class="change-to-text-text">החלף לטקסט</div>
                <div v-show="onlyText" class="change-to-text-text">החלף לתרשים</div>
                <img v-show="!onlyText" :src="require('../../media/graphics/parchment.png')" class="example-img"/>
                <img v-show="onlyText" :src="require('../../media/graphics/timeline.png')" class="example-img"/>
            </div>
            <div class="example-header">
                <div v-if="!onlyText">סעיף 20: {{ $store.state.InteractiveExamplesData[exampleNumber][currentTimeStamp]["section-20-date"] }}</div>
                <div v-else>&hearts;</div>
            </div>
            <div class="example-content">
                <p v-if="!onlyText" v-html="$store.state.InteractiveExamplesData[exampleNumber][currentTimeStamp]['section-20-explanation']"></p>
                <p v-else>{{ $store.state.InteractiveExamplesData[exampleNumber][0].text }}</p>
            </div>
            <div class="time-stamps-container" v-show="!onlyText">
                <div class="time-stamp" :class="{'time-stamp-shape-gray': currentTimeStamp !== index, 'time-stamp-active': currentTimeStamp === index}" @click="clickedTimeStamp(index)" v-for="index in $store.state.InteractiveExamplesData[exampleNumber].length-1" :key="index">
                    <div class="time-stamp-title" :class="{'time-stamp-title-active': currentTimeStamp === index}">{{ $store.state.InteractiveExamplesData[exampleNumber][index]["time-stamp-date"] }}</div>
                    <p>{{ $store.state.InteractiveExamplesData[exampleNumber][index]["time-stamp-details"] }}</p>
                    <svg class="time-stamp-shape" preserveAspectRatio="none" viewBox="0 0 100 200">
                        <path class="hover-gray" d="M 0 0 L 100 0 L 100 150 L 50 200 L 0 150 L 0 0" fill="none" stroke="var(--blue)" stroke-width="3"></path>
                    </svg>
                    <div class="active-image-container" v-if="currentTimeStamp === index">
                        <img class="active-image" :src="activeImageSrc(index)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InteractiveExample',

    data() {
        return {
            onlyText: false,
            currentTimeStamp: 1,
        }
    },
    props: {
        exampleNumber: {
            type: Number,
            required: true,
        }
    },
    methods: {
        clickedTimeStamp(index) {
            this.currentTimeStamp = index;
        },
        activeImageSrc(index) {
            return require("./../../media/graphics/" + this.$store.state.InteractiveExamplesData[this.exampleNumber][index]['active-image'] + ".svg")
        },
        changeToText() {
            this.onlyText = !this.onlyText;
        }
    },
    computed: {

    },
}
</script>


<style scoped>

    .example-help {
        border: var(--yellow) 0.5vmin solid;
        width: 55%;
        display: flex;
        position: relative;
        padding: 1%;
    }
    
    .example-help div {
        padding: 2%;
        box-sizing: border-box;
    }

    .example-help-mark {
        width: 25%;
        font-size: 7vmin;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: var(--yellow);
        margin-left: 3%;
    }

    .change-to-text {
        width: 12%;
        position: absolute;
        right: 2%;
        top: 0%;
        cursor: pointer;
    }

    .change-to-text:hover img {
        height: 94%;
        width: 94%;
        padding: 3% 3% 0% 0%;
    }

    .example-img {
        width: 100%;
        height: 100%;
    }

    .example-container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-end;
        box-sizing: border-box;
    }

    .example-content {
        padding-bottom: 6%;
        width: 100%;
        box-sizing: border-box;
        padding: 2%;
    }

    .example-header {
        width: 100%;
        padding: 0%;
        text-align: center;
    }

    .time-line-container {
        width: 100%;
        height: 30%;
        max-height: 20vh;
    }

    .time-stamps-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: row;
        flex-wrap: nowrap;
        position: relative;
        top: -2vmin;
    }

    .time-stamp {
        margin: 0% 2%;
        position: relative;
        width: 20%;
        height: 100%;
        cursor: pointer;
    }

    .time-stamp-active {
        cursor: auto;
    }
    
    .time-stamp-title {
        background-color: var(--blue);
        text-align: center;
        color: white;
    }

    .time-stamp-shape {
        z-index: 1;
        height: fit-content;
    }

     .time-stamp-active .time-stamp-shape path {
        stroke: var(--red);
    }
    
    .time-stamp-shape-gray:hover .hover-gray {
        fill: rgb(242, 242, 242);
    }

    .time-stamp-active .time-stamp-title {
        background-color: var(--red);
    }

    .time-stamp p {
        z-index: 5;
        position: absolute;
        left: 50%;
        top: 15%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
        font-size: 0.95em;
        line-height: 1.5em;
    }

    .active-image-container {
        background-color: white;
        width: 70%;
        height: 4em;
        position: absolute;
        left: 15%;
        bottom: -1em;
    }

    .active-image {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
        cursor: auto;
    }

    .change-to-text-text {
        font-size: 0.8em;
        text-align: center;
        line-height: 1em;
        width: 105%;
    }

</style>