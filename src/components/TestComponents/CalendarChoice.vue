<template>
    <div>
        <!-- <p v-html="allTestQuestions[38][0].question">{{currentNumber}}</p>
        {{allTestquestions[38][0].answers[0]}} <input type="number" v-model="currentNumber"> {{allTestquestions[38][0].answers[1]}} -->
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

    },
    created(){
    }
}
</script>

<style scoped>

</style>
