<template>
    <div>
        <p v-html="questions[currentQuestionIndex].question"></p>
        <div class="test-answers-container" >
            <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index"
            :class="{'selectedAnswer': currentUserAnswer === index || currentIndex === index,
            'correct': isFeedbackMode && (Number(questions[currentQuestionIndex].rightAnswer) === index),
            'incorrect': isFeedbackMode && (currentUserAnswer === index) && (Number(questions[currentQuestionIndex].rightAnswer) !== index),
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
        currentQuestionIndex: {
            type: Number,
            required: true,
        },
        currentUserAnswer: {
            // type: Array,
            required: true,
        },
    },
    computed: {
        questions() {
            return this.$store.state.testQuestions 
        },
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
    },
    methods: {
        clicked($event, index) {
            console.log(index);
            this.currentIndex = index;
            this.$emit('answer-clicked', index);
        }
    },
    created(){
        // this.hgcurrentUserAnswer=this.currentUserAnswer;
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