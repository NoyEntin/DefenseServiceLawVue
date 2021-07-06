<template>
    <div>
        <div ref="ocean" class="ocean">
            <div class="wave"></div>
        </div>
        <div class="exercise-content">
            <p class="exercise-question" v-html="question">
            </p>
            <div class="exercise-answers-container">
                <div class="exercise-answer" v-for="(answer, index) in answers" :key="index"
                @click="answerClicked($event, index)"
                :class="{ 'correct-answer': colorAnswerGreen(index), 'iccorrect-answer': colorAnswerRed(index)}">
                    {{ answer }}
                </div>
            </div>
            <div class="answer-explanation" v-if="isThereAnExplanation">
                {{explanation}}
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
            correctAnswer: Number(this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["rightAnswer"]),
            isAnswerCorrect: false,
            currentAnswer: -1,
            explanation: this.$store.state.exerciseQuestions[this.$store.state.currentContentChapter - 1][this.pageIndex][this.questionIndex]["explanation"]
        }
    },
    methods: {
        answerClicked(event, index) {
            this.currentAnswer = index;
            if (index === this.correctAnswer) {
                this.isAnswerCorrect = true;
            } else {
                this.isAnswerCorrect = false;
            }
            this.$emit('clicked', this.isAnswerCorrect, this.currentAnswer)
        },
        colorAnswerGreen(index) {
            return index === this.currentAnswer && this.isAnswerCorrect
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
    },
}
</script>

<style scoped>
    .exercise-question {
        font-size: 1.1em;
    }

    .correct-answer {
        background-color: rgba(0, 128, 0, 0.7);
        cursor: auto;
    }

    .correct-answer:hover {
        background-color: rgba(0, 128, 0, 0.7);
    }

    .iccorrect-answer {
        background-color: rgba(255, 0, 0, 0.7);
        cursor: auto;
    }

    .iccorrect-answer:hover {
        background-color: rgba(255, 0, 0, 0.7);
    }

    .answer-explanation {
        border: var(--yellow) 1vmin solid;
        padding: 2vmin;
        box-sizing: border-box;
    }

</style>