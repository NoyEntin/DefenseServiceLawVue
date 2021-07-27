<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <div :class="{'answer-container incorrect-answer-container': isFeedbackMode}" v-if="!isFeedbackMode || !$store.state.userTestAnswersBoolean[currentQuestionIndex]">
            <table>
                <tr v-for="(answer, index) in currentQuestion.answers" :key="index"
                :class="{'selectedAnswer': currentUserAnswer[index] === index || currentIndex[index] === index,
                'disable': isFeedbackMode,
                'correct': isFeedbackMode && (currentUserAnswer[index] === index) && (Number(currentQuestion.rightAnswer[index]) === index),
                'incorrect': isFeedbackMode && (currentUserAnswer[index] === index) && (Number(currentQuestion.rightAnswer[index]) !== index)}"
                class="test-answer"
                @click="clicked($event, index)">
                    <td v-for="(tdContent ,tdIndex) in answer" :key="'td' + index + tdIndex" v-html="tdContent">
                    </td>
                </tr>
            </table>
        </div>
        <div class="answer-container correct-answer-container" v-if="isFeedbackMode">
            <table>
                <tr v-for="(answer, index) in currentQuestion.answers" :key="index"
                :class="{'correct': isFeedbackMode && (Number(currentQuestion.rightAnswer[index]) === index)}"
                class="test-answer disable">
                    <td v-for="(tdContent ,tdIndex) in answer" :key="'td' + index + tdIndex" v-html="tdContent">
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableSelection',
    data() {
        return {
            currentIndex: [],
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
        currentQuestionIndex: {
            type: Number,
            required: false
        }
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
    },
    methods: {
        clicked($event, index) {
            if (index === this.currentIndex[index]) {
                this.currentIndex[index] = -1;
            } else {
                this.currentIndex[index] = index;
                this.$emit('answer-clicked', this.currentIndex);
            }
        }
    },
    created(){
        for (var i = 0; i < this.currentQuestion.answers.length; i++) {
            this.currentIndex.push(-1);
        }
    }
}
</script>

<style scoped>


.table-head {
    color: white;
    background-color: black;
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
    background-color: var(--lighten-blue);
}

.selectedAnswer:hover{
    background-color: var(--lighten-blue);
}

.correct {
    background-color: rgba(32, 178, 105, 0.7);
}

.incorrect {
    background-color: rgba(231, 29, 54, 0.7);
}

.disable {
    pointer-events: none;
}

.answer-container {
    padding: 2% 2% 2% 2%;
    box-sizing: border-box;
    width: fit-content;
    display: inline-block;
}

.correct-answer-container {
    background-color: rgb(213, 247, 229);
}

.incorrect-answer-container {
    background-color: rgb(247, 213, 213);
}
</style>