<template>
    <div>
        <div class="sub-bar sub-title">מבחן מסכם</div>
        
        <div class="progress-bar">
            <div v-for="index in questions.length" :key="index" @click="goToQuestion(index)" class="progress-bar-test-question">
                {{ index }}
                <div :class="{'answered': userAnswer[index-1] !== -1,
                'correct': isFeedbackMode && (userAnswer[index-1] === Number(questions[index-1].rightAnswer)),
                'incorrect': isFeedbackMode && (userAnswer[index-1] !== Number(questions[index-1].rightAnswer)),
                'currentQuestion': currentQuestionIndex === index-1}"
                class="progress-bar-test-question-bg">
                </div>
            </div>
        </div>
        <div class="content-container">
            <div class="test-content">
                <div v-if="!showForm">
                    <p v-html="questions[currentQuestionIndex].question"></p>
                    <div class="test-answers-container" >
                        <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index"
                        :class="{'selectedAnswer': userAnswer[currentQuestionIndex] === index,
                        'correct': isFeedbackMode && (Number(questions[currentQuestionIndex].rightAnswer) === index),
                        'incorrect': isFeedbackMode && (userAnswer[currentQuestionIndex] === index) && (Number(questions[currentQuestionIndex].rightAnswer) !== index),
                        'disable': isFeedbackMode}"
                        class="test-answer"
                        @click="answerClicked(event, index)">
                            <span v-html="answer"></span>
                        </div>
                    </div>
                </div>
                <TestForm ref="testForm" v-else></TestForm>
            </div>
        </div>
        <div class="bottom-ui">
            <div class="next-btn btn-shadow bottom-ui-button" v-if="currentQuestionIndex < questions.length - 1 && !showForm" @click="next">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="prev-btn btn-shadow bottom-ui-button" v-if="currentQuestionIndex > 0 && !showForm" @click="prev">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 0 L 50 0 L 100 100 L 50 200 L 0 200 L 50 100" fill="var(--red)"></path>
                </svg>
            </div>
            <div class="start-test-btn next-btn btn-shadow bottom-ui-button" v-if="showForm" @click="startTest">
                <svg preserveAspectRatio="none" viewBox="0 0 100 200">
                    <path d="M 0 100 L 50 0 L 100 0 L 50 100 L 100 200 L 50 200" fill="var(--red)"></path>
                </svg>
                <img src="../media/graphics/racingFlag.svg" class="start-test-btn-logo">
                <div class="start-test-btn-bg"></div>
                <div class="start-test-btn-text-container">
                    <div class="start-test-btn-text">!התחל</div>
                </div>
            </div>
        </div>

        <div v-if="isFeedbackMode">
            <div v-if="isPassingGrade" class="bottom-btn back-to-mtv-btn" @click="backToMtv">
                <p>חזור לMTV</p>
            </div>
            <div v-else class="bottom-btn new-test-btn" @click="showPopUp=true">
                <p>מבחן חדש</p>
            </div>
        </div>
        <div v-else-if="!showForm" 
        class="bottom-btn end-test-btn" :class="{btnReady: isTestFinished}"
        @mouseover="toolTipActive = true" @mouseout="toolTipActive = false"
        @click="endTest">
            <img class="test-btn-img" v-show="isTestFinished" src="../media/graphics/testIcon.svg">
            <p>הגש מבחן</p>
            <div class="end-test-tooltip" v-show="toolTipActive && !isTestFinished">יש לענות על כל השאלות</div>
        </div>

        <div class="test-pop-up-container" v-if="showPopUp && !showForm">
            <div class="overlay">
                <div v-if="!isFeedbackMode" class="test-pop-up">
                    <div class="x-btn" @click="closePopUp(); timer()">&#10006;</div>
                    <p>שימו ♥</p>
                    <p>עולים חדשים מקבלים מעמד אזרחי בעת העלייה שלהם. כאשר מצוין תאריך העלייה יש להתייחס לתאריך זה כתאריך בו קיבלו מעמד אזרחי.</p>
                </div>
                <div v-else class="test-pop-up test-ready">
                    <div class="pop-up-container">
                        <div class="pop-up-text">
                            שימו♥!
                            <br>
                            יש לכם עוד הזדמנות לעבור על החומר,
                            <br>
                            כדי לנצל אותה לחצו על כפתור דף הבית או התפריט
                        </div>
                        <div class="pop-up-btn-container">
                            <div class="pop-up-btn-no pop-up-btn" @click="closePopUp">
                                <img class="study-img" src="./../media/graphics/studyIcon.svg">
                                <p>חזור ללמוד</p>
                            </div>
                            <div class="pop-up-btn-yes pop-up-btn" @click="reloadTest">
                                <p>התחל בבחינה</p>
                                <img class="test-img" src="./../media/graphics/testIcon.svg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TestForm from './TestForm.vue';
import PopUp from './PopUp.vue';

export default {
    name: 'TestScreen',

    data() {
        return {
            userAnswer: [],
            currentQuestionIndex: -1,
            toolTipActive: false,
            showPopUp: true,
            timerMinutes: 90,
            timerSeconds: 0
        }
    },
    computed: {
        questions() {
            return this.$store.state.testQuestions 
        },
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode   
        },
        isPassingGrade() {
            return this.$store.getters.isPassingGrade
        },
        isTestFinished() {
            if(this.timerMinutes === 0 && this.timerSeconds === 0)
                return true;
            for (var i = 0; i < this.questions.length; i++) {
                if (this.userAnswer[i] === -1) {
                    return false;
                };
            }
            return true;
        },
        showForm() {
            return this.currentQuestionIndex === -1;
        }
    },
    methods: {
        answerClicked(event, answerIndex) {
            if(!this.isFeedbackMode) {
                this.userAnswer.splice(this.currentQuestionIndex, 1, answerIndex);
            }
        },
        startTest() {
            if(this.$refs.testForm.validate()){
                this.$store.commit('updateUserInfo', this.$refs.testForm.userInfo);
                this.next();
            }else{
                alert("יש למלא את כל הפרטים בצורה תקינה !");
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
        initializeUserAnswers() {
            if(this.$store.state.userInfo !== 'empty')
                this.currentQuestionIndex = 0;
            if(this.isFeedbackMode){
                this.showPopUp = false;
                this.userAnswer = this.$store.state.userTestAnswers;
            } else {
                this.userAnswer = [];
                for(var i=0; i<this.questions.length; i++){
                    this.userAnswer.push(-1);
                }
            }
        },
        reloadTest() {
            console.log("in reloadTest");
            this.$store.dispatch('initializeTest').then(()=>{
                this.currentQuestionIndex = 0;
                this.toolTipActive= false;
                this.showPopUp = true;
                this.initializeUserAnswers();
            });
        },
        timer() {
            if(this.$store.getters.isTestScreen){
                this.$emit('updateTimer', this.timerMinutes, this.timerSeconds)
                setTimeout(() => {
                    if (this.timerSeconds > 0) {
                        this.timerSeconds--;
                        this.timer()
                    } else if(this.timerMinutes !== 0) {
                        this.timerMinutes--;
                        this.timerSeconds = 59;
                        this.timer()
                    } else {
                        this.endTest()
                    }
                }, 1000)
            }
        }
    },
    components: {
        TestForm,
        PopUp     
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

.bottom-btn {
    position: fixed;
    bottom: 1vmin;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 22vmin;
    height: 6vmin;
    font-size: 2.5vmin;
    display: flex;
    align-items: center;
    justify-content: center;
}

.end-test-btn {
    background-color: rgb(224, 197, 148);
}

.test-btn-img {
    height: 120%;
    position: absolute;
    right: -4vmin;
    top: -0.5vmin;
}

.back-to-mtv-btn {
    background-color: slateblue;
    border: 2px solid white;
    color: white;
    cursor: pointer;
}

.new-test-btn {
    background-color: var(--yellow);
    color: white;
    cursor: pointer;
}

.back-to-mtv-btn:hover {
    background-color: rgb(57, 46, 129);
}

.new-test-btn:hover {
    background-color: var(--darken-yellow);
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

.correct-progress-bar {
    background-color: rgb(32, 178, 105);
}

.incorrect-progress-bar
{
    background-color: rgb(231, 29, 54);
}

.correct {
    background-color: rgb(32, 178, 105);
}

.incorrect {
    background-color: rgb(231, 29, 54);
}

.currentQuestion{
    background-color: var(--yellow);
}

.disable {
    pointer-events: none;
}

.start-test-btn-logo {
    position: absolute;
    top: 0vmin;
    left: 8vmin;
    height: 100%;
    transition: ease 0.4s;
}

.start-test-btn-bg {
    background-color: rgb(184, 20, 40);
    height: 100%;
    width: 7vmin;
    position: absolute;
    top: 0;
    left: 3vmin;
    border-radius: 0 0 34%/100% 0;
    z-index: -1;
    transition: ease 0.4s;

}

.next-btn:hover .start-test-btn-logo {
    left: 17vmin;
}

.next-btn:hover .start-test-btn-bg {
    width: 16vmin;
    border-radius: 0 0 14%/100% 0;
}

.start-test-btn:hover  {
    left: 6vmax;
}

.start-test-btn-text {
    color: white;
    font-size: 3vmin;
    width: max-content;
}

.start-test-btn-text-container {
    direction: ltr;
    overflow: hidden;
    width: 0;
    transition: ease 0.4s;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7vmin;
}

.next-btn:hover .start-test-btn-text-container {
    width: 15vmin;
}

.pop-up-text {
    line-height: 2.5vmax;
    font-size: 1.5vmax;
}
</style>