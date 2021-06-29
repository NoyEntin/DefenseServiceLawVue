<template>
    <div>
        <div class="sub-bar sub-title">{{chapterName}}</div>
        <div class="progress-bar">
            <!-- for loop, iterates number of pages -->
            <div v-for="page in pagesInChapter" :key="page" class="progress-bar-page" :class="{ full:  ((page - 1) < currentPageIndex) || ((page - 1) === currentPageIndex && isExercise)}">
                <div v-if="((page - 1) === currentPageIndex) && !isExercise" class="progress-marker">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--red)"></path>
                    </svg>
                </div>
                <div class="progress-bar-exercise"></div>
            </div>
        </div>
        <div ref="contentContainer" class="content-container" v-on="isExercise ? { scroll: positionWave } : {}">
            <component ref="pageContent" v-bind:is="currentPageName"></component>
        </div>
        <div class="bottom-ui">
            <div class="next-btn btn-shadow bottom-ui-button" @click="next">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="prev-btn btn-shadow bottom-ui-button" v-if="currentPageIndex > 0" @click="prev">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 0 L 50 0 L 100 100 L 50 200 L 0 200 L 50 100" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="to-home-btn next-btn btn-shadow bottom-ui-button" v-if="currentPageIndex === pagesInEachChapter[chapterId] - 1 && isExercise" @click="$store.commit('backToHome')">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>

                <img src="../media/graphics/home.svg" class="to-home-btn-logo">
                <div class="to-home-btn-bg"></div>
                <div class="to-home-btn-text-container">
                    <div class="to-home-btn-text">לעמוד הבית</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ExercisePage from "./contentPageComponents/ExercisePage"
import Chapter1Page1 from "./contentPageComponents/Chapter1Page1"
import Chapter1Page2 from "./contentPageComponents/Chapter1Page2"
import Chapter1Page3 from "./contentPageComponents/Chapter1Page3"
import Chapter1Page4 from "./contentPageComponents/Chapter1Page4"
import Chapter1Page5 from "./contentPageComponents/Chapter1Page5"
import Chapter2Page1 from "./contentPageComponents/Chapter2Page1"
import Chapter2Page2 from "./contentPageComponents/Chapter2Page2"
import Chapter2Page3 from "./contentPageComponents/Chapter2Page3"
import Chapter2Page4 from "./contentPageComponents/Chapter2Page4"
import Chapter2Page5 from "./contentPageComponents/Chapter2Page5"
import Chapter2Page6 from "./contentPageComponents/Chapter2Page6"
import Chapter3Page1 from "./contentPageComponents/Chapter3Page1"
import Chapter3Page2 from "./contentPageComponents/Chapter3Page2"
import Chapter3Page3 from "./contentPageComponents/Chapter3Page3"
// import Chapter3Page4 from "./contentPageComponents/Chapter3Page4"
// import Chapter3Page5 from "./contentPageComponents/Chapter3Page5"
// import Chapter3Page6 from "./contentPageComponents/Chapter3Page6"




export default {
    name: 'ContentScreen',
    props: {
    },
    data() {
        return {
            pagesInEachChapter: [5, 6, 5],
            currentPageIndex: 0,
            isExercise: false,
        }
    },
    methods: {
        next() {
            if(this.isExercise){
              this.currentPageIndex++;  
            }
            this.isExercise = !this.isExercise;
        },
        prev() {
            if(this.isExercise){
                this.isExercise = false;
            } else {
                this.currentPageIndex--;  
            }
        },
        positionWave() {
            $(this.$refs.pageContent.$refs.ocean).css("top","calc(calc(calc(100vh - 19vmin) - 198px) + " + $(this.$refs.contentContainer).scrollTop() + "px)");
        }
    },
    computed: {
        chapterId() {
            return this.$store.state.currentContentChapter - 1;
        },
        pagesInChapter() {
            return this.pagesInEachChapter[this.chapterId];
        },
        chapterName(){
            return this.$store.state.chapterNames[this.chapterId];
        },
        currentPageName(){
            if(!this.isExercise){
               return 'Chapter' + this.$store.state.currentContentChapter + 'Page' + (this.currentPageIndex + 1); 
            }
            else{
                return 'ExercisePage';
            }
        }
    },
    watch: {
        currentPageName: function(){
            $(this.$refs.contentContainer).scrollTop(0);
        }
    },
    components: {
        ExercisePage,
        Chapter1Page1,
        Chapter1Page2,
        Chapter1Page3,
        Chapter1Page4,
        Chapter1Page5,
        Chapter2Page1,
        Chapter2Page2,
        Chapter2Page3,
        Chapter2Page4,
        Chapter2Page5,
        Chapter2Page6,
        Chapter3Page1,
        Chapter3Page2,
        Chapter3Page3,
        // Chapter3Page4,
        // Chapter3Page5,
        // Chapter3Page6,
    }
}
</script>

<style scoped>
.progress-bar-page {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    flex-grow: 1;
}

.progress-bar-exercise {
    background-color: var(--yellow);
    height: 100%;
    width: 4%;
    float: left;
}

.progress-marker {
    position: absolute;
    height: 100%;
    width: 2.5%;
}

.full {
    background-color: var(--red);
}

.to-home-btn-logo {
    position: absolute;
    top: 0vmin;
    left: 7vmin;
    height: 100%;
    transition: ease 0.4s;
}

.to-home-btn-bg {
    background-color: rgb(184, 20, 40);
    height: 100%;
    width: 10vmin;
    position: absolute;
    top: 0;
    left: 3vmin;
    border-top-right-radius: 2.8vmin;
    z-index: -1;
    transition: ease 0.4s;

}

.next-btn:hover .to-home-btn-logo {
    left: 22vmin;
}

.next-btn:hover .to-home-btn-bg {
    width: 25vmin;
}

.to-home-btn:hover  {
    left: 6vmax;
}

.to-home-btn-text {
    color: white;
    font-size: 3vmin;
    width: max-content;
}

.to-home-btn-text-container {
    direction: ltr;
    overflow: hidden;
    width: 0;
    transition: ease 0.4s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7vmin;
}

.next-btn:hover .to-home-btn-text-container {
    width: 15vmin;
}
</style>