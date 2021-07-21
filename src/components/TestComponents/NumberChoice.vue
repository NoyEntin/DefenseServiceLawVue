<template>
    <div>
        <p v-html="currentQuestion.question"></p>

        <div v-if="!isFeedbackMode || currentUserAnswer !== currentQuestion.rightAnswer" :class="{'incorrect': (isFeedbackMode && currentUserAnswer !== currentQuestion.rightAnswer)}">
            {{currentQuestion.answers[0]}}
            <input type="number" min=0 v-model="currentNumber" @input="answerChanged" :disabled="isFeedbackMode">
            {{currentQuestion.answers[1]}}
        </div>
        <div class="correct" v-if="isFeedbackMode">
            {{currentQuestion.answers[0]}}
            <input :value="currentQuestion.rightAnswer" disabled="true">
            {{currentQuestion.answers[1]}}
            <div>{{currentQuestion.answers[2]}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NumberChoice',
    data() {
        return {
            currentNumber: 0,
        }
    },
    props: {
        currentQuestion: {
            type: Object,
            required: true,
        },
        currentUserAnswer: {
            // type: Array,
            required: true,
        },
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        }
    },
    methods: {
        answerChanged() {
            this.$emit('answer-clicked', this.currentNumber);
        }

    },
    created() {
        if(this.currentUserAnswer > -1)
            this.currentNumber = this.currentUserAnswer;
    },
}
</script>

<style scoped>
    .incorrect {
        color: red
    }
    .correct {
        color: green
    }
    .incorrect input{
        background-color: red;
        color: white;
    }
    .correct input{
        background-color: green;
        color: white;
    }
</style>
