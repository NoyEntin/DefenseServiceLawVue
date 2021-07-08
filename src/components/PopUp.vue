<template>
    <div class="pop-up">
        <div class="skip-chapter" v-if="whichPopUp === 'skip-chapter'">
            <div class="overlay">
                <div class="pop-up-container">
                    <div class="pop-up-text">
                        רק רגע!
                        <br>
                        לאן אתם ממהרים? עוד לא סיימתם את הפרק הקודם
                    </div>
                    <img class="pop-up-image" src="./../media/graphics/racecar.png">
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
                        שימו♥!
                        <br>
                        לאחר תחילת המבחן לא תתאפשר חזרה לחומר והתרגול.
                        <br>
                        בטוחים שאתם מוכנים?
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <img class="study-img" src="./../media/graphics/studyIcon.svg">
                            <p>חזור ללמוד</p>
                        </div>
                        <div class="pop-up-btn-yes pop-up-btn" @click="onTestConfirm">
                            <p>התחל בבחינה</p>
                            <img class="test-img" src="./../media/graphics/testIcon.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="go-study" v-if="whichPopUp === 'go-study'">
            <div class="overlay">
                <div class="pop-up-container">
                    <!-- <img class="go-study-img-2" src="./../media/graphics/angryShadow.svg"> -->
                    <!-- <img  class="go-study-img" src="./../media/graphics/angry2.svg"> -->
                    <img class="go-study-img" src="./../media/graphics/angry.png">
                    <div class="pop-up-text">
                        <p>לא ניגשים למבחן בלי להתכונן!</p>
                        <p>בדוק את תפריט הניווט</p>
                        <p>ותראה מה נשאר ללמוד</p>
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <img class="study-img" src="./../media/graphics/studyIcon.svg">
                            <p>חזור ללמוד</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="skip-in-menu" v-if="whichPopUp === 'skip-in-menu'">
            <div class="pop-up-container">
                <img class="overtaking-img" src="./../media/graphics/overtaking.svg">
                <div class="pop-up-text">
                    זהירות בעקיפה!
                    <br>
                    בטוח שאתה רוצה לקפוץ קדימה?
                </div>
                <div class="dont-show-again">
                    <input type="checkbox">
                    <span>אל תציג הודעה זו שוב</span>
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

        }
    },
    props: {
        onNoClick: {
            type: Function,
            required: true,
        },
        // onSkipInMenuConfirm: {
        //     type: Function,
        //     required: true,
        // },
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
            this.$store.commit('loadTestScreen');
        },
        continueToChapter() {
            this.$store.commit('loadContentScreen');
            this.$store.commit('updateCurrentContentChapter', this.buttonIndex);
            this.$store.commit('updateCurrentContentPage', 0);
        },
        onSkipInMenuConfirm: function(){
            this.$emit('navigateToPage');
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
}

.pop-up-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 25vmax;
    width: 50vmax;
    background-color: white;
}

.go-study .pop-up-container {
    height: 60%;
}

.pop-up-text {
    position: absolute;
    top: 15%;
    text-align: center;
}

.skip-chapter .pop-up-text {
    width: 50%;
    top: 10%;
    right: 2%;
}

.test-ready .pop-up-text {
    width: 50%;
    right: 25%;
}

.go-study .pop-up-text {
    /* top: 5%; */
    left: 10%;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
}

.skip-in-menu .pop-up-text {
    right: 10%;
}

.skip-chapter .pop-up-image {
    position: absolute;
    text-align: right;
    left: 4%;
    bottom: 34%;
    height: 38%;
    width: 50%;
}

.pop-up-btn-container {
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    font-size: 1.7vmax;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
}

.go-study .pop-up-btn-container {
    height: 20%;
    width: 40%;
}

.pop-up-btn-no {
    background-color: var(--red);
}

.pop-up-btn-no:hover {
    background-color: var(--lighten-red);
}

.pop-up-btn-yes {
    background-color: var(--yellow);
}

.pop-up-btn-yes:hover {
    background-color: var(--lighten-yellow);
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

.pop-up-btn {
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.go-study .pop-up-btn {
    justify-content: flex-start;
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

.study-img,
.test-img {
    height: 90%;
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
</style>