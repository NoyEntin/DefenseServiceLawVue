<template>
    <div>
        <div class="sub-bar sub-title">מבחן מסכם
            {{"mode: " + isFeedbackMode}}
            {{userAnswer}}
        </div>
        <div class="progress-bar">
            <div v-for="index in questions.length" :key="index" @click="goToQuestion(index)" class="progress-bar-test-question">
                {{ index }}
                <div :class="{'currentQuestion':(currentQuestionIndex === index-1),
                 'answered':(userAnswer[index-1] !== -1),
                 'correct': (isFeedbackMode && userAnswer[index-1]===Number(questions[index-1].rightAnswer))}"
                  class="progress-bar-test-question-bg">
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="test-content">
                <p>
                    {{questions[currentQuestionIndex].question}}
                </p>
                <div class="test-answers-container" >
                    <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index"
                    :class="{'selectedAnswer': userAnswer[currentQuestionIndex] === index}"  class="test-answer"
                    @click="answerClicked(event, index)">
                        {{answer}}
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-ui">
            <div class="next-btn btn-shadow bottom-ui-button" v-if="currentQuestionIndex < questions.length - 1" @click="next">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="prev-btn btn-shadow bottom-ui-button" v-if="currentQuestionIndex > 0" @click="prev">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 0 L 50 0 L 100 100 L 50 200 L 0 200 L 50 100" fill="var(--red)"></path>
                </svg>
            </div>
        </div>
        <div v-if="!isFeedbackMode" 
        class="end-test-btn" :class="{btnReady: isTestFinished}"
        @mouseover="toolTipActive = true" @mouseout="toolTipActive = false"
        @click="endTest">
            <img class="test-btn-img" v-show="isTestFinished" src="../media/graphics/testIcon.svg">
            <p>הגש מבחן</p>
            <div class="end-test-tooltip" v-show="toolTipActive && !isTestFinished">יש לענות על כל השאלות</div>
        </div>
        <div v-else-if="isPassingGrade" class="end-test-btn" @click="endTest">
            <p>חזור לMTV</p>
        </div>
        <div v-else class="end-test-btn" @click="endTest">
            <p>מבחן חדש</p>
        </div>

        <div class="test-pop-up-container" v-if="showPopUp && !isFeedbackMode">
            <div class="overlay">
                <div class="test-pop-up">
                    <div class="x-btn" @click="closePopUp">&#10006;</div>
                    <p>שימו ♥</p>
                    <p>עולים חדשים מקבלים מעמד אזרחי בעת העלייה שלהם. כאשר מצוין תאריך העלייה יש להתייחס לתאריך זה כתאריך בו קיבלו מעמד אזרחי.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';

export default {
    name: 'TestScreen',
    props: {

    },
    data() {
        return {
            questions: this.$store.state.testQuestions,
            userAnswer: [],
            currentQuestionIndex: 0,
            toolTipActive: false,
            showPopUp: true,
            isFeedbackMode: this.$store.state.isFeedbackMode,
            isPassingGrade: this.$store.getters.isPassingGrade
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
            if(!this.isFeedbackMode) {
                this.userAnswer.splice(this.currentQuestionIndex, 1, answerIndex);
            }
        },
        next() {
            this.currentQuestionIndex++;
        },
        prev() {
            this.currentQuestionIndex--;
        },
        goToQuestion(index) {
            this.currentQuestionIndex = index - 1;
        },
        closePopUp(event) {
            this.showPopUp = !this.showPopUp;
        },
        endTest() {
            if(this.isTestFinished){
                this.$store.commit('setUserTestAnswers', this.userAnswer);
                this.$store.commit('calculateGrade');
                this.$store.commit('loadEndScreen');
            }
        },
        initializeUserAnswers(){
            if(this.isFeedbackMode){
                this.userAnswer=this.$store.state.userTestAnswers;
            }else{
                for(var i=0; i<this.questions.length; i++){
                    this.userAnswer.push(1);
                }
            }
            
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
        // questions() {
        //     var array = [];
        //     for (var i = 0; i < 20; i++) {
        //         array[i] = {question: "hallo", answers: ["nah nah nah", "nah nah nah nah nah", "nah nah nah nah", "batman"], correct: "2"};
        //     }
        //     return array;
        // },
        isTestFinished() {
            for (var i = 0; i < this.questions.length; i++) {
                if (this.userAnswer[i] === -1) {
                    return false;
                };
            }
            return true;
        }
    },
    components: {
        
    },
    created(){
        this.initializeUserAnswers();
    }
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
    z-index: 1;
    transition: 0.2s;
    transform-origin: center;
    flex-grow: 1;
    cursor: pointer;
    line-height: 150%;
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

.end-test-btn {
    position: fixed;
    bottom: 1vmin;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background-color: rgb(224, 197, 148);
    width: 22vmin;
    height: 6vmin;
    font-size: 2.5vmin;
    display: flex;
    align-items: center;
    justify-content: center;
}

.test-btn-img {
    height: 120%;
    position: absolute;
    right: -4vmin;
    top: -0.5vmin;
}

.end-test-tooltip {
    background-color: white;
    position: absolute;
    top: -3vmin;
    left: 50%;
    transform: translateX(-50%);
    width: 20vmin;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    font-size: 1.5vmin;
}

.btnReady {
    background-color: var(--yellow);
    cursor: pointer;
}

.btnReady:hover {
    background-color: var(--lighten-yellow);
}

.test-pop-up {
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    width: 30%;
    padding: 1%;
    box-sizing: border-box;
    text-align: center
}

.x-btn {
    position: absolute;
    top: 7%;
    right: 4%;
    background-color: var(--blue);
    height: 4vmin;
    width: 4vmin;
    cursor: pointer;
    color: white;
    line-height: 4vmin;
}

.correct {
    background-color: green;
}
</style>