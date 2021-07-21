<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <div class="test-answers-container" >
            <div v-for="(answer, index) in currentQuestion.answers" :key="index"
            :class="{'selectedAnswer': currentUserAnswer === index || currentIndex === index,
            'correct': isFeedbackMode && (Number(currentQuestion.rightAnswer) === index),
            'incorrect': isFeedbackMode && (currentUserAnswer === index) && (Number(currentQuestion.rightAnswer) !== index),
            'disable': isFeedbackMode}"
            class="test-answer"
            @click="clicked($event, index)">
                <span v-html="answer"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'multipleChoice',
    data() {
        return {
            currentIndex: -1,
        }
    },
    props: {
        currentQuestion: {
            type: Object,
            required: true,
        },
        currentUserAnswer: {
            required: true,
        },
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
    },
    methods: {
        clicked($event, index) {
            this.currentIndex = index;
            this.$emit('answer-clicked', index);
        }
    },
    created(){

    }
}
</script>

<style scoped>

.test-answers-container {
    display: flex;
    flex-flow: column nowrap;
}

.test-answer {
    background-color: rgb(236, 238, 240);
    padding: 2vmin;
    margin: 1vmin;
    border: black 1px solid;
    cursor: pointer;
}

.test-answer:hover {
    transition: 0.2s;
    background-color: rgb(215, 219, 223);
}

.answered{
    opacity: 1;
}

.selectedAnswer{
    cursor: auto;
    background-color: var(--lighten-blue);
}

.selectedAnswer:hover{
    background-color: var(--lighten-blue);
}

.disable {
    pointer-events: none;
}

.correct {
    background-color: rgb(32, 178, 105);
}

.incorrect {
    background-color: rgb(231, 29, 54);
}

</style>