<template>
    <div>
        <p v-html="allTestQuestions[38][1].question"></p>
        {{allTestQuestions[38][1].answers[0][0]}} <input type="number" v-model="currentNumber"> {{allTestQuestions[38][1].answers[0][1]}}
        <!-- {{questions[currentQuestionIndex].answers[0]}} <input type="number" v-model:number="currentNumber"> {{questions[currentQuestionIndex].answers[1]}} -->
    </div>
</template>

<script>
export default {
    name: 'NumberChoice',
    data() {
        return {
            currentNumber: "",
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
        allTestQuestions() {
            return this.$store.state.allTestQuestions 
        },
    },
    methods: {
        number (currentNumber) {
            console.log(currentNumber);
            // this.$emit('update:modelValue', number);
        }
    },
    created(){
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
