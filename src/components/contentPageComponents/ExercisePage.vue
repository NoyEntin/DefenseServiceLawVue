<template>
    <div>
        <div ref="ocean" class="ocean">
            <div class="wave"></div>
        </div>
        <div class="exercise-content">
            <div class="section-title">
                <p>בחן את עצמך:</p>
            </div>
            <p class="exercise-question" v-html="question">
            </p>
            <div class="exercise-answers-container">
                <div class="exercise-answer" v-for="(answer, index) in answers" :key="index"
                @click="answerClicked($event, index)"
                :class="{ 'correct-answer': colorAnswerGreen(index), 'incorrect-answer': colorAnswerRed(index), 'disable': isAnswerCorrect}">
                    {{ answer }}
                </div>
            </div>
            <div class="answer-explanation" v-if="isThereAnExplanation">
                {{ explanation }}
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'ExercisePage',
    props: {
        pageIndex: {
            required: true,
            type: Number
        },
        questionIndex: {
            required: true,
            type: Number
        }
    },
    data() {
        return {
            // isAnswerCorrect: false,
            currentAnswer: -1,
        }
    },
    methods: {
        answerClicked(event, index) {
            if (!this.isAnswerCorrect) {
                this.currentAnswer = index;
                if (this.currentAnswer === this.correctAnswer) {
                    this.$store.commit('updateAnsweredQuestion', this.questionIndex);
                    this.currentAnswer = -1;
                }
                this.$emit('onAnswerClick');
            }
        },
        colorAnswerGreen(index) {
            return index === this.correctAnswer && this.isAnswerCorrect
        },
        colorAnswerRed(index) {
            return index === this.currentAnswer && !this.isAnswerCorrect
        }
    },
    computed: {
        chapterId() {
            return this.$store.state.currentContentChapter - 1;
        },
        question() {
            return this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["question"]
        },
        answers() {
            return this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["answers"]
        },
        isThereAnExplanation() {
            return this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["explanation"] !== undefined && this.isAnswerCorrect
        },
        isAnswerCorrect() {
            return this.$store.state.areExerciseQuestionsAnswered[this.chapterId][this.pageIndex][this.questionIndex]
        },
        correctAnswer(){
            return Number(this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["rightAnswer"])
        },
         explanation(){
            return this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["explanation"]
        }
    },
    // created() {
    //     if (this.$store.state.areExerciseQuestionsAnswered[this.chapterId][this.pageIndex][this.questionIndex]) {
    //         this.isAnswerCorrect = true;
    //     }
    // }
}
</script>

<style scoped>
    .exercise-question {
        font-size: 1.1em;
    }

    .section-title {
    background-color: var(--yellow);
    height: fit-content;
    width: fit-content;
    padding: 0 1vh;
    /* position: absolute; */
    /* bottom: 0; */
    margin: 0;
    font-size: 1.1em;
}

    .exercise-answers-container {
    display: flex;
    flex-flow: column nowrap;
    z-index: 2;
    }

    .exercise-answer {
        background-color: rgba(1, 22, 39, 0.7);
        padding: 2vmin;
        margin: 1vmin;
        border: black 1px solid;
        color: white;
    }
    .exercise-answer:not(.disable):hover {
        cursor: pointer;
        transition: 0.2s;
        background-color: rgba(1, 22, 39, 0.9);
    }

    .answer-explanation {
        padding: 2vmin;
        margin: 1vmin;
        border: var(--yellow) 3px solid;
    }

    .correct-answer {
        background-color: rgb(32, 178, 105, 0.9);
    }

    .correct-answer:hover {
        background-color: rgb(32, 178, 105, 0.9);
        cursor: auto;
    }

    .incorrect-answer {
        background-color: rgb(231, 29, 54, 0.9);
    }

    .incorrect-answer:not(.disable):hover {
        background-color: rgb(231, 29, 54, 0.9);;
        cursor: auto;
    }
</style>