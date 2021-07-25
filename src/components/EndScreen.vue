<template>
    <div class="end-test-screen" :class="{'failed': !isPassingGrade}">
        <img>
        <div class="text-container">
            <img class="test-icon" src="./../media/graphics/testIcon.svg"/>
            <div>
               <span v-if="isPassingGrade"> כל הכבוד! </span> <span v-else> לא נורא! </span> <br>
                {{userInfo.firstName +" "+ userInfo.lastName +", " + userInfo.personalNumber}}<br>
                סיימתם את לומדת חוק שירות ביטחון בציון:
            </div>
            <div class="test-score">{{grade}}</div>
            <div v-if="grade === 100">
                <b>מדהים!</b><br>
                בואו נעיף מבט במקור התהילה שלכם לפני שאתם הולכים
            </div>
            <div v-else-if="isPassingGrade">
                <b>זה ציון נהדר!</b><br>
                אבל תמיד אפשר ללמוד מהטעויות שלנו,<br>
                אז בואו נראה אותן כדי שתרשימו אותנו עוד יותר בפעם הבאה
            </div>
            <div v-else>
                <b> זה ציון נכשל...! </b>
                <br>
                תמיד תוכלו לנסות שוב, אבל קודם כל, בוא נלמד מהטעויות שלכם   
            </div>
        </div>
            <div @click="loadTestFeedback" class="show-me-btn">
                בוא ניסע!
                <img src="./../media/graphics/sports-car.svg"/>
            </div>
    </div>
</template>

<script>

export default {
    name: 'EndScreen',
    props: {},
    emits: [''],
    data() {
        return {
            grade: this.$store.state.grade,
            isPassingGrade: this.$store.getters.isPassingGrade,
            userInfo: this.$store.state.userInfo
        }
    },
    methods: {
        loadTestFeedback() {
            this.$store.commit('loadTestScreen', {isFeedbackMode: true});
        }
    },
    computed: {

    },
    components: {

    }
}
</script>

<style scoped>
    .end-test-screen {
        font-size: 1.25em;
        line-height: 2em;
        width: 70vw;
        height: calc(100vh - 12vmin);
        background-color: white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0%;
        border-color: var(--yellow);
        border-width: 3vmin;
        border-style: solid;
        padding: 3vmin;
        box-sizing: border-box;
    }
    .failed {
        border-color: rgb(231, 29, 54);
    }
    .test-score {
        color: var(--blue);
        font-weight: bold;
        font-size: 3em;
        text-shadow: 0.06em 0px 0.05em black;
        -webkit-text-shadow: 0.06em 0px 0.05em black;
        line-height: normal;
    }
    .text-container {
        text-align: center;
    }
    .show-me-btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--yellow);
        display: flex;
        align-items: center;
        color: white;
        height: 3em;
        width: fit-content;
        padding: 0 1em 0 0;
        justify-content: space-between;
        cursor: pointer;
        border-radius: 70%/100% 0% 0% 0%;
        margin-top: 5%;
    }
    .show-me-btn:hover{
        background-color: var(--darken-yellow);
    }
    .show-me-btn img {
        height: 100%;
        margin-left: -7.5%;
        margin-right: 1em;
    }
    .test-icon {
        position: absolute;
        right: 2%;
        top: 2%;
        width: 15%;
    }
</style>