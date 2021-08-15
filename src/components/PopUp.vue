<template>
    <div class="pop-up">
        <div class="skip-chapter" v-if="whichPopUp === 'skip-chapter'">
            <div class="overlay">
                <div class="pop-up-container">
                    <div class="pop-up-text">
                        רק רגע!
                        <br>
                    לאן אתם ממהרים? עוד לא סיימתם את כל הפרקים הקודמים
                    </div>
                    <img class="pop-up-image" :src="require('./../media/graphics/racecar.png')">
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <p>צודק, בואו נחזור למסלול</p>
                        </div>
                        <div class="pop-up-btn-yes pop-up-btn" @click="continueToChapter">
                            <p>אני כאן לרענון, תנו לי להסתובב חופשי</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="test-ready" v-if="whichPopUp === 'test-ready'">
            <div class="overlay">
                <div class="pop-up-container">
                    <div class="pop-up-text">
                        שימו ♥!
                        <br>
                        המבחן מוגבל בזמן (90 דקות).
                        <br>
                        לאחר תחילת המבחן לא תתאפשר חזרה לחומר ולתרגול.
                        <br>
                        בטוחים שאתם מוכנים?
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <img class="study-img"  :src="require('./../media/graphics/studyIcon.svg')">
                            <p>חזור ללמוד</p>
                        </div>
                        <div class="pop-up-btn-yes pop-up-btn" @click="onTestConfirm">
                            <p>התחל בבחינה</p>
                            <img class="test-img" :src="require('./../media/graphics/testIcon.svg')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="test-or-feedback" v-if="whichPopUp === 'test-or-feedback'">
            <div class="overlay">
                <div class="pop-up-container">
                    <div class="pop-up-text">
                        רוצה לחזור לצפות בתשובות שלך
                        <br>
                        או לעשות מבחן חדש?
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="returnToFeedback">
                            <img class="study-img" :src="require('./../media/graphics/exam.png')">
                            <p>חזור למשוב</p>
                        </div>
                        <div class="pop-up-btn-yes pop-up-btn" @click="onTestConfirm">
                            <p>מבחן חדש</p>
                            <img class="test-img" :src="require('./../media/graphics/testIcon.svg')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="go-study" v-if="whichPopUp === 'go-study'">
            <div class="overlay">
                <div class="pop-up-container">
                    <!-- <img class="go-study-img-2" :src="require('./../media/graphics/angryShadow.svg')"> -->
                    <!-- <img  class="go-study-img" :src="require('./../media/graphics/angry2.svg')"> -->
                    <img class="go-study-img" :src="require('./../media/graphics/angry.png')">
                    <div class="pop-up-text">
                        <p>לא ניגשים למבחן בלי להתכונן!</p>
                        <p>בדקו את תפריט הניווט
                             <img :src="require('./../media/graphics/menuIcon.png')" class="go-study-menu-icon"/>
                        </p>
                        <p>ותראו מה נשאר ללמוד</p>
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <img class="study-img" :src="require('./../media/graphics/studyIcon.svg')">
                            <p>חזור ללמוד</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skip-in-menu" v-if="whichPopUp === 'skip-in-menu'">
            <div class="pop-up-container">
                <img class="overtaking-img" :src="require('./../media/graphics/overtaking.svg')">
                <div class="pop-up-text">
                    זהירות בעקיפה!
                    <br>
                    בטוח שאתם רוצים לקפוץ קדימה?
                </div>
                <div class="dont-show-again">
                    <input type="checkbox" id="checkbox" v-model="checkbox" @click="$emit('checkbox')">
                    <span>אל תציג הודעה זו שוב
                        <!-- {{dontShowAgain}} -->
                    </span>
                </div>
                <div class="pop-up-btn-container">
                    <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                        <p>לא, תשאיר אותי בנתיב</p>
                    </div>
                    <div class="pop-up-btn-yes pop-up-btn" @click="onSkipInMenuConfirm">
                        <p>כן, שים גז!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'PopUp',

    data() {
        return {
            checkbox: false,
        }
    },
    props: {
        onNoClick: {
            type: Function,
            required: true,
        },
        whichPopUp: {
            type: String,
            required: true,
        },
        buttonIndex: {
            type: Number,
            required: false,
        }
    },
    methods: {
        onTestConfirm() {
            // this.$store.commit('loadTestScreen', {isFeedbackMode: false});
            this.$store.dispatch('initializeTest');
        },
        continueToChapter() {
            this.$store.commit('loadContentScreen');
            this.$store.commit('updateCurrentContentChapter', this.buttonIndex);
            this.$store.commit('updateCurrentContentPage', 0);
        },
        onSkipInMenuConfirm: function(){
            this.$emit('navigateToPage');
        },
        returnToFeedback() {
            // console.log("commit loadTestScreen");
            this.$store.commit('loadTestScreen', { isFeedbackMode: true });
        }
    },
    computed: {

    },
}
</script>

<style scoped>

.pop-up {
    height: 100vh;
    width: 100vw;
    position: absolute;
    line-height: 2.5vmax;
    font-size: 2vmax;
    background-color: rgba(255, 255, 255, 0);
    font-weight: lighter;
}

.go-study .pop-up-container {
    height: 60%;
}

.skip-chapter .pop-up-text {
    width: 50%;
    top: 10%;
    right: 2%;
}

.go-study .pop-up-text {
    /* top: 5%; */
    left: 10%;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
}

.skip-in-menu .pop-up-container {
    width: 45vmax;
}

.skip-in-menu .pop-up-text {
    right: 6%;
}

.skip-chapter .pop-up-image {
    position: absolute;
    text-align: right;
    left: 4%;
    bottom: 34%;
    height: 38%;
    width: 50%;
}

.test-ready .pop-up-text{
    top: 10%;
}

.test-or-feedback .pop-up-text {
    top: 20%;
    width: 100%;
    text-align: center;
    line-height: 2em;
}

.go-study .pop-up-btn-container {
    height: 20%;
    width: 40%;
}

.skip-in-menu .pop-up-btn-no {
    background-color: rgb(162, 218, 214);
}

.skip-in-menu .pop-up-btn-yes {
    background-color: var(--blue);
}

.skip-in-menu .pop-up-btn-no:hover {
    background-color: var(--darken-blue);
}

.skip-in-menu .pop-up-btn-yes:hover {
    background-color: var(--darken-blue);
}


.go-study .pop-up-btn {
    justify-content: flex-start;
}

.pop-up-btn {
    font-weight: normal;
}

.go-study-img {
    /* height: 22vmax; */
    height: 70%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    /* width: 100%; */
}

.go-study .study-img {
    height: 105%;
    position: relative;
    bottom: 0;
    transform: translateX(50%);
}

.overtaking-img {
    height: 55%;
    width: 55%;
    position: absolute;
    left: -8%;
    top: 4%;
}

.dont-show-again {
    font-size: 0.7em;
    position: absolute;
    bottom: 30%;
    right: 58%;
}

.go-study-menu-icon {
    vertical-align: middle;
    height: 3vmax;
    margin-right: 2%;
}
</style>