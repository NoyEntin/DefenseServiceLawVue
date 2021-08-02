<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <v-date-picker class="calendar" v-if="!isFeedbackMode" :model-config="modelConfig" v-model="date" />
        <div v-else>
            <p v-if="currentUserAnswer !== currentQuestion.rightAnswer" class="incorrect">
                {{dateForFeedback(currentUserAnswer)}}
            </p>
            <p class="correct">
                {{dateForFeedback(currentQuestion.rightAnswer)}}
            </p>
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
            required: true,
        },
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        }
    },
    methods: {
        dateForFeedback(date){
            var dateArray = date.split("-");
            return dateArray[2] +"/" + dateArray[1] +"/"+ dateArray[0]
        }
    },
    created() {
        if(this.currentUserAnswer !== -1)
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
        color: rgb(231, 29, 54);
    }
    .correct {
        color: rgb(32, 178, 105);
    }
    .calendar {
        direction: ltr;
    }
</style>
