<template>
    <div>
        <div class="sub-bar sub-title">{{chapterName}}</div>
        <div class="progress-bar">
            <!-- for loop, iterates number of pages -->
            <div v-for="page in pagesInChapter" :key="page" class="progress-bar-page">
                <div class="progress-marker">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--red)"></path>
                    </svg>
                </div>
                <div class="progress-bar-exercise"></div>
            </div>
        </div>
        <div class="content-container">
            <div class="pages">
                <div class="page-content" data-page-num="1">1</div>
            </div>
            <div class="pages">
                <div class="page-content" data-page-num="2">2</div>
            </div>
            <div class="pages">
                <div class="page-content" data-page-num="3">3</div>
            </div>
            <div class="pages">
                <div class="page-content" data-page-num="4">4</div>
            </div>
            <div class="pages">
                <div class="page-content" data-page-num="5">5</div>
            </div>
        </div>

        <div class="bottom-ui">
            <div id="next-btn" class="next-btn btn-shadow">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
            </div>
            <div id="prev-btn" class="prev-btn btn-shadow">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 0 L 50 0 L 100 100 L 50 200 L 0 200 L 50 100" fill="var(--red)"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentScreen',
    props: {
    },
    data() {
        return {
            pagesInEachChapter: [5, 6, 5],
        }
    },
    methods: {

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
        }
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
</style>