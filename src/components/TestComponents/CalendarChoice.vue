<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <v-date-picker v-if="!isFeedbackMode" :model-config="modelConfig" v-model="date" />
        <div v-else>
            <p v-if="currentUserAnswer !== currentQuestion.rightAnswer" class="incorrect">{{currentUserAnswer}}</p>
            <p class="correct">{{currentQuestion.rightAnswer}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarChoice',
    data() {
        return {
            date: new Date(),
            modelConfig: {
                type: 'string',
                mask: 'YYYY-MM-DD'
            },
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

    },
    created() {
        console.log(this.currentUserAnswer);
        if(this.currentUserAnswer instanceof Date)
            this.date = this.currentUserAnswer;
    },
    watch: {
        date: function(){
            this.$emit('answer-clicked', this.date);
        },
    }
}
</script>

<style scoped>
    .incorrect {
        color: red
    }
    .correct {
        color: green
    }
</style>
