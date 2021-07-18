<template>
    <div>
        <p v-html="allTestQuestions[34][0].question"></p>
        <!--<div class="test-answers-container">-->
        <table>
            <tr class="table-head">
                <th>dfzg</th>
                <th>znzt</th>
            </tr>
            <tr v-for="(answer, index) in allTestQuestions[34][0].answers" :key="index"
            :class="{'selectedAnswer': currentUserAnswer === index || currentIndex === index,
            'correct': isFeedbackMode && (Number(allTestQuestions[34][0].rightAnswer) === index),
            'incorrect': isFeedbackMode && (currentUserAnswer === index) && (Number(allTestQuestions[34][0].rightAnswer) !== index),
            'disable': isFeedbackMode}"
            class="test-answer"
            @click="clicked($event, index)">
                <td v-html="answer"></td>
                <td>ggg</td>
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
        allTestQuestions () {
            return this.$store.state.allTestQuestions
        },
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
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
            if (index === this.currentIndex[index]) {
                this.currentIndex[index] = -1;
            } else {
                this.currentIndex[index] = index;
                this.$emit('answer-clicked', index);
            }
            console.table(this.currentIndex);
        }
    },
    created(){
        // console.log(this.allTestQuestions);
        // console.log(this.allTestQuestions[34]);
        // console.log(this.allTestQuestions[34][0].rightAnswer);
        for (var i = 0; i < this.allTestQuestions[34][0].answers.length; i++) {
            console.log(this.allTestQuestions[34][0].answers.length);
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