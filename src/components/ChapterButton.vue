<template>
    <div class="chapter-btn" :class="['chapter-' + buttonId]" @click="buttonClicked">
        <div :class="{'chapters-black': !idDone, 'remove-black': isDone}">
        </div>
        <div class="chapter-btn-progress-bar">
            <div :class="{'chapter-btn-full-progress-bar': isDone}"></div>
            <div class="chapter-btn-progress-marker" :class="{'chapter-btn-progress-marker-move': isDone}">
                <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                    <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--yellow)"></path>
                </svg>
            </div>
        </div>
        <div class="chapter-btn-title">
           {{chapterName}}
        </div>
        <div class="chapter-btn-number-container">
            <svg preserveAspectRatio="none" viewBox="0 0 100 300">
                <path d="M 0 0 L 100 0 L 100 200 L 50 300 L 0 200 L 0 0" fill="var(--blue)"></path>
            </svg>
            <p class="chapter-btn-number">{{buttonId}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ChapterButton',
    props: {
        buttonId: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            isDone: false,
        }
    },
    methods: {
        buttonClicked() {
            this.$emit('triggerBtnClicked');
        }
    },
    computed: {
        chapterName(){
            return this.$store.state.chapterNames[this.buttonId - 1];
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            if (this.$store.getters.isChapterDone(this.buttonId - 1)) {
                this.isDone = true;
            }
        })
    },
}
</script>

<style scoped>

.chapter-btn {
    position: relative;
    margin: 4vmin;
    height: 21vmax;
    width: 21vmax;
    max-width: 35vh;
    max-height: 35vh;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
}

.chapter-1 {
    background-image: url("../media/graphics/idfServiceLaw.jpg");
}

.chapter-2 {
    background-image: url("../media/graphics/section20.jpg");
}

.chapter-3 {
    background-image: url("../media/graphics/defaulters.jpg");
}

.chapters-black {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
}

@keyframes remove-black {
  0% {
    background-color: rgba(0, 0, 0, 0.4);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.remove-black {
  animation: remove-black 1.2s;
  background-color: rgba(255, 255, 255, 0.3);
}

@keyframes fill-bar {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}

.chapter-btn-full-progress-bar {
    background-color: var(--yellow);
    animation: fill-bar 1.2s;
    display: inline-block;
    width: 100%;
    height: 100%;
}

.chapter-btn:hover .chapters-black {
    transition: 0.1s;
    background-color: rgba(255, 255, 255, 0.3);
}

.chapter-btn-progress-bar {
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0vh;
}

.chapter-btn-progress-marker {
    width: 15%;
    height: 100%;
    display: inline-block;
    position: absolute;
}

.chapter-btn-title {
    background-color: var(--red);
    position: absolute;
    bottom: 10%;
    width: 100%;
    height: 12%;
    text-align: center;
    color: white;
    font-size: calc(0.6em + 1.2vmin);
    display: flex;
    justify-content: center;
    align-items: center;
}

.chapter-btn-number-container {
    position: absolute;
    height: 25%;
    width: 15%;
    right: 5%;
}

.chapter-btn-number {
    position: absolute;
    text-align: center;
    width: 100%;
    font-weight: lighter;
    top: -2vmin;
    font-size: calc(0.8em + 1.4vmin);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>