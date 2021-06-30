<template>
    <div class="pop-up">
        <div class="skip-chapter" v-if="whichPopUp === 'skip-chapter'">
            <div class="black-overlay">
                <div class="pop-up-container">
                    <div class="pop-up-text">
                        רק רגע!
                        <br>
                        לאן אתם ממהרים? עוד לא סיימתם את הפרק הקודם
                    </div>
                    <img class="pop-up-image" src="./../media/graphics/racecar.png">
                    <div class="dont-show-again">
                        <input type="checkbox">
                        <span>אל תציג הודעה זו שוב</span>
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <p>צודק, בואו נחזור למסלול</p>
                        </div>
                        <div class="pop-up-btn-yes pop-up-btn">
                            <p>אני כאן לרענון, תנו לי להסתובב חופשי</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="test-ready" v-if="whichPopUp === 'test-ready'">
            <div class="black-overlay">
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
                        <div class="pop-up-btn-yes pop-up-btn">
                            <p>התחל בבחינה</p>
                            <img class="test-img" src="./../media/graphics/testIcon.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="go-study" v-if="whichPopUp === 'go-study'">
            <div class="black-overlay">
                <div class="pop-up-container">
                    <!-- <img class="go-study-img" src="./../media/graphics/.svg"> -->
                    <div class="pop-up-text">
                        <p>לא ניגשים למבחן בלי להתכונן!</p>
                        <p>לא בטוח איזה נושאים נשארו לך?</p>
                        <p>בדוק את תפריט הניווט </p>
                        <p>כך תוכל לראות מה נשאר לך!</p>
                    </div>
                    <div class="pop-up-btn-container">
                        <div class="pop-up-btn-no pop-up-btn" @click="onNoClick">
                            <p>חזור ללמוד</p>
                            <img class="study-img" src="./../media/graphics/studyIcon.svg">
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
                    <div class="pop-up-btn-yes pop-up-btn">
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
        whichPopUp: {
            type: String,
            required: true,
        },
    },
    methods: {
    
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

.black-overlay {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
}

.pop-up-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35vmax;
    width: 60vmax;
    background-color: white;
}

.go-study .pop-up-container {
    height: 60%;
}

.skip-chapter .pop-up-text {
    text-align: center;
    width: 50%;
    position: absolute;
    top: 15%;
    right: 5%;
}

.test-ready .pop-up-text {
    text-align: center;
    width: 50%;
    position: absolute;
    top: 20%;
    right: 25%;
}

.go-study .pop-up-text {
    position: absolute;
    text-align: center;
    top: 15%;
    left: 10%;
}

.skip-in-menu .pop-up-text {
    text-align: center;
    position: absolute;
    top: 15%;
    right: 10%;
}

.skip-chapter .pop-up-image {
    position: absolute;
    left: 4%;
    bottom: 38%;
}

.pop-up-btn-container {
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
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

.pop-up-btn {
    width: 100%;
    height: 100%;
    text-align: center;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
}

.study-img,
.test-img {
    height: 90%;
}

.study-img {
    right: 1%;
}

.test-img {
    left: 1%;
}

.go-study .study-img {
    height: 105%;
    bottom: 0;
    right: -16%;
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
    bottom: 32%;
    right: 58%;
}
</style>