<template>
    <div>
        <div class="sub-bar introduction-div">
            <p class="introduction-text">
                <b>ברוכים הבאים ללומדת חש"ב! </b>
                 בלומדה נסקור את הסעיפים החשובים בחוק, נתעמק בסעיף 20, החיוני לביצוע תפקידנו, ובנושא ההשתמטות.
            </p>
            <p class="introduction-text">
                אם הגעתם כדי לבצע את המבחן, חשוב
                <b>להיות ממוקדים ומומלץ אף לרשום הערות </b>
                וסיכומים במהלך הלומדה.
            </p>
            <p class="introduction-text">
                כבר עשיתם את הלומדה אבל אתם צריכים ריענון? אין בעיה, לא צריך לשנן-
                <b>הלומדה תמיד לרשותכם באתר.</b>
            </p>
        </div>
        <div class="homepage-btn-container">
            <div class="chapters-container">
                <ChapterButton @triggerBtnClicked="BtnClicked(buttonIndex)" v-for="buttonIndex in totalChapterNumber" :key="buttonIndex" :buttonId="buttonIndex"></ChapterButton>
            </div>
            <div class="test-btn" @click="TestButtonClicked">
                <img :src="require('../media/graphics/testIcon.svg')" class="test-btn-icon" />
                <p>מבחן מסכם</p>
            </div>
        </div>
        <PopUp v-if="popUpShowing" :onNoClick="ClosePopUp" :whichPopUp="whichPopUp" :buttonIndex="buttonIndex">
        </PopUp>
    </div>

</template>

<script>
import ChapterButton from './ChapterButton.vue'
import PopUp from './PopUp.vue'

export default {
    name: 'HomeScreen',
    props: {},
    emits: ['triggerBtnClicked'],
    data() {
        return {
            popUpShowing: false,
            whichPopUp: '',
            buttonIndex: -1,
        }
    },
    methods: {
        TestButtonClicked(){
            this.popUpShowing = true;

            if(this.$store.getters.contentDone) {
                if(this.$store.state.grade !== -1) {
                    this.whichPopUp = 'test-or-feedback';
                } else {
                    this.whichPopUp = 'test-ready';
                }
            } else {
                this.whichPopUp = 'go-study';
            }
        },
        BtnClicked(buttonIndex) {
            this.buttonIndex = buttonIndex;
            if(!this.$store.getters.prevChaptersDone(buttonIndex - 1)) {
                this.popUpShowing = true;
                this.whichPopUp='skip-chapter';
            } else {
                this.$store.commit('loadContentScreen');
                this.$store.commit('updateCurrentContentChapter', buttonIndex);
                this.$store.commit('updateCurrentContentPage', 0);
            }
        },
        ClosePopUp() {
            this.popUpShowing = !this.popUpShowing;
        }
    },
    computed: {
        totalChapterNumber() {
            return this.$store.state.totalChapterNumber
        },
    },
    
    components: {
        ChapterButton,
        PopUp,
    }
}
</script>

<style scoped>
.introduction-div {
    font-size: 2vmin;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.introduction-text {
    margin: 1vmin;
    width: 28%;
    max-width: 400px;
}

.homepage-btn-container {
    position: absolute;
    top: 30vmin;
    width: 100%;
}

.chapters-container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}

.test-btn {
    position: absolute;
    background-color: var(--yellow);
    height: 8vmax;
    width: 36vmax;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 0%);
    max-height: 17vh;
    max-width: 70vh;
    margin-top: 1vh;
    cursor: pointer;
}

.test-btn:hover {
    background-color: var(--lighten-yellow);
}

.test-btn p {
    color:white;
    margin: 0 3vmax;
    font-size: 4vh;
    font-weight: lighter;
}

.test-btn-icon {
    height: 120%;
    margin-right: -8%;
}
</style>