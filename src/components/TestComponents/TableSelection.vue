<template>
    <div>
        <p v-html="questions[currentQuestionIndex].question"></p>
        <!--<div class="test-answers-container">-->
        <table>
            <tr class="table-head">
                <th></th>
                <th></th>
            </tr>
            <tr v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index"
            :class="{'selectedAnswer': currentUserAnswer[index] === index || currentIndex[index] === index,
            'disable': isFeedbackMode,
            'correct': isFeedbackMode && (Number(questions[currentQuestionIndex].rightAnswer[index]) === index),
            'incorrect': isFeedbackMode && (currentUserAnswer[index] === index) && (Number(questions[currentQuestionIndex].rightAnswer[index]) !== index)}"
            class="test-answer"
            @click="clicked($event, index)">
                <td v-html="answer[0]"></td>
                <td v-show="answer[1] !== 'XXX'" v-html="answer[1]"></td>
            </tr>
        </table>
        <!--</div>-->
    </div>
</template>

<script>
export default {
    name: 'tableSelection',
    data() {
        return {
            currentIndex: [],
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
        questions() {
            return this.$store.state.testQuestions 
        },
    },
    methods: {
        clicked($event, index) {
            console.log(index);
            if (index === this.currentIndex[index]) {
                this.currentIndex[index] = -1;
            } else {
                this.currentIndex[index] = index;
                this.$emit('answer-clicked', this.currentIndex);
            }
            console.table(this.currentIndex);
        }
    },
    created(){
        for (var i = 0; i < this.questions[this.currentQuestionIndex].answers.length; i++) {
            console.log(this.questions[this.currentQuestionIndex].answers.length);
            console.log(this.currentIndex);
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
    background-color: rgb(32, 178, 105);
}

.incorrect {
    background-color: rgb(231, 29, 54);
}

.disable {
    pointer-events: none;
}


</style>