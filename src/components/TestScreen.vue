<template>
    <div>
        <div class="sub-bar sub-title">מבחן מסכם</div>
        <div class="progress-bar">
            <!-- :style="{backgroundColor: setColor(index - 1)}" -->
            <div v-for="index in questions.length" :key="index" class="progress-bar-test-question">
                                    {{ index }}
                <div :class="{'currentQuestion':(currentQuestionIndex === index-1), 'answered':(userAnswer[index-1] !== -1)}" class="progress-bar-test-question-bg">
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="test-content">
                <p>
                    {{questions[currentQuestionIndex].question}}
                </p>
                <div class="test-answers-container" >
                    <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index" :class="{'selectedAnswer': userAnswer[currentQuestionIndex] === index}"  class="test-answer" @click="answerClicked(event, index)">
                        {{answer}}
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-ui">
            <div class="next-btn btn-shadow" @click="next">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="prev-btn btn-shadow">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 0 L 50 0 L 100 100 L 50 200 L 0 200 L 50 100" fill="var(--red)"></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'TestScreen',
    props: {

    },
    data() {
        return {
            // questions: [
            //     {
            //         q: 'fhgfd gfhdgjk uighskfdjsgh iusdguifhsigu sdiuidus uifdsfdhysigufh',
            //         a: 'jdfhjdff',
            //         b: 'dhsuifgiuskdushui',
            //         c: 'jdhgfjfhkjko',
            //         d: 'hdyiooijkekeke'
            //     },
            // ],
            // questions: [],
            userAnswer: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
            currentQuestionIndex: 0,
        }
    },
    methods: {
        // isAnswered(index){
        //     return this.userAnswer[index] !== -1;
        // },
        setColor(index) {
            var color;
            var isAnswered = this.userAnswer[index] !== -1;
            if (index === this.currentQuestionIndex) {
                color = "rgb(253, 184, 51, 0.5)";
                if (isAnswered) {
                    color = "rgb(253, 184, 51)";
                }
            }
            else {
                color = "rgb(1, 22, 39, 0.5)";
                if (isAnswered) {
                    color = "rgb(1, 22, 39)";
                }
            }
            return color;
        },
        answerClicked(event, answerIndex) {
            this.userAnswer.splice(this.currentQuestionIndex, 1, answerIndex);
            // this.userAnswer[this.currentQuestionIndex] = answerIndex;
            console.log(this.userAnswer);

        },
        next() {
            console.log(this.currentQuestionIndex);
            this.currentQuestionIndex++;
            console.log(this.currentQuestionIndex);
        }
    },
    computed: {
        // userAnswer(){
        //     var array=[];
        //     for (var i = 0; i < 20; i++) {
        //         array[i] = -1;
        //     }
        //     return array;
        // },
        questions() {
            var array = [];
            for (var i = 0; i < 20; i++) {
                array[i] = {question: "hallo", answers: ["nah nah nah", "nah nah nah nah nah", "nah nah nah nah", "batman"], correct: "2"};
            }
            return array;
        }
    },
    components: {
        
    },
}
</script>

<style scoped>
.progress-bar-test-question {
    position: relative;
    height: 100%;
    /* background-color: rgb(1, 22, 39, 0.5); */
    border: white 1px solid;
    color: white;
    text-align: center;
    font-size: 1.5vmin;
    box-shadow: 0 0.5vmin 0.7vmin rgba(1, 22, 39, 0.5);
    z-index: 3;
    transition: 0.2s;
    transform-origin: center;
    flex-grow: 1;
    cursor: pointer;
}

.progress-bar-test-question * {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.progress-bar-test-question-bg{
    background-color: rgb(1, 22, 39);
    opacity: 0.5;
    z-index: -1;
}

.progress-bar-test-question:hover {
    flex-grow: 1.4;
    position: relative;
    height: 2.4vh;
}

.test-answers-container {
    display: flex;
    flex-flow: column nowrap;
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

.currentQuestion{
    background-color: var(--yellow);
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
</style>