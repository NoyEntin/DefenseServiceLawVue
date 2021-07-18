<template>
  <div id="app">
    <div class="background"></div>
    <div class="top-bar">
      <div class="overlay" v-show="isMenuOpen"></div>
      <!-- Show only if page isn't test page -->
      <div v-if="showMenu" class="top-bar-button menu-btn on-overlay" @click="openMenu" title="תפריט">
        <span class="menu-icon" :class="{'menu-icon-open': isMenuOpen}"></span>
      </div>
      <!-- is mtv if hompage -->
      <div v-if="showBackToMtv" class="top-bar-button mtv-btn">
        MTV
      </div>
      <!-- is back to home if content page -->
      <!-- <div v-else-if="currentScreenComponent === 'ContentScreen' || currentScreenComponent === 'TestScreen'" class="top-bar-button home-btn" @click="$store.commit('backToHome')"> -->
      <div v-else-if="showBackToHome" class="top-bar-button home-btn" @click="$store.commit('backToHome')">
      </div>
      <div class="title">
        לומדת חש"ב
      </div>
      <div v-if="showTimer" class="top-bar-button timer">
        <img src="./../media/graphics/hourglass.svg"/>
        <div>
          <span v-show="timerMinutes < 10">0</span>{{timerMinutes}}:<span v-show="timerSeconds < 10">0</span>{{timerSeconds}}
        </div>
      </div>
      <div class="top-bar-button law-btn" title="החוק עצמו" @click="openLaw"></div>
    </div>


      <!-- <iframe src="./../media/animations/lawBtn.html" scrolling="no" style="width:640px; height:480px; margin:0; padding:0; border:none; overflow:hidden"></iframe> -->
      <!--
    <endTestScreen></endTestScreen>
      page itself, either:
      - hompage
      - content page
      - test page
      like so:
      <home-screen></home-screen> -->
      <!-- <HomeScreen v-if="currentScreenComponent === 'home-screen'" @load-chapter="loadChapter"></HomeScreen>
      <ContentScreen v-else-if="currentScreenComponent === 'content-screen'" :chapter-id="currentContentChapterIndex"></ContentScreen> 
      <test-screen v-else-if="currentScreenComponent !== 'test-screen'" ></test-screen> -->
    <component v-bind:is="currentScreenComponent" @updateTimer='updateTimer'></component>

    <transition name="delay-overlay">
      <div class="navigation-menu-overlay" v-show="isMenuOpen">
        <PopUp v-if="popUpShowing" :onNoClick="ClosePopUp" @navigateToPage="navigateToPage" :whichPopUp="'skip-in-menu'" @checkbox="changeDontShowAgain"></PopUp>
        <transition name="slide">
          <NavigationMenu class="on-overlay" v-show="isMenuOpen" :disabled="popUpShowing" :dontShowAgain="dontShowAgain" @triggerOpenMenu="openMenu" @askToNavigate="ShowPopUp"></NavigationMenu>
        </transition>
      </div>
    </transition>


  </div>
</template>

<script>
import store from './../store/index';
// import "./../createjs.min.js";
// import * as lawBtn from './../media/animations/lawBtn.js';
import HomeScreen from './../components/HomeScreen.vue';
import ContentScreen from './../components/ContentScreen.vue';
import TestScreen from './../components/TestScreen.vue';
import NavigationMenu from './../components/NavigationMenu.vue';
import PopUp from './../components/PopUp.vue';
import EndScreen from './../components/EndScreen.vue';

export default {
  name: 'MainApp',
  emits: ['triggerOpenMenu', 'navigateToPage', 'changeDontShowAgain', 'updateTimer'],
  data() {
      return {
          screenComponentNames: ["HomeScreen", "ContentScreen", "TestScreen", "EndScreen"],
          isMenuOpen: false,
          popUpShowing: false,
          chapterToNavigateTo: 0,
          pageToNavigateTo: 0,
          dontShowAgain: false,
          timerMinutes: 90,
          timerSeconds: 0
          // checkbox: false,
      }
  },
  methods: {
    openMenu(){
      this.isMenuOpen = !this.isMenuOpen;
      this.popUpShowing = false;
      // this.$refs.NavigationMenu.
    },
    ShowPopUp: function(event, chapterIndex, pageIndex) {
      // if (!this.dontShowAgain) {
        // }
      this.popUpShowing = true;
      this.chapterToNavigateTo = chapterIndex,
      this.pageToNavigateTo = pageIndex
    },
    ClosePopUp() {
      this.popUpShowing = !this.popUpShowing;
    },
    navigateToPage(){
      this.ClosePopUp();
      this.openMenu();
      this.$store.commit('updateCurrentContentChapter', this.chapterToNavigateTo + 1);
      this.$store.commit('updateCurrentContentPage', this.pageToNavigateTo);
      this.$store.commit('loadContentScreen');
    },
    changeDontShowAgain() {
      this.dontShowAgain = !this.dontShowAgain;
    },
    updateTimer(timerMinutes, timerSeconds){
      this.timerMinutes = timerMinutes;
      this.timerSeconds = timerSeconds;
    },
    openLaw(){
      window.open("theLaw.html");
    },
  },
  store,
  computed: {
      currentScreenIndex() {
          return this.$store.state.currentScreenIndex
      },
      currentScreenComponent() {
          return this.screenComponentNames[this.currentScreenIndex];
      },
      showMenu() {
        return this.currentScreenComponent !== 'EndScreen' && !(this.currentScreenComponent === 'TestScreen' && !store.state.isFeedbackMode);
      },
      showBackToMtv() {
        return this.currentScreenComponent === 'HomeScreen';
      },
      showBackToHome() {
        return this.currentScreenComponent === 'ContentScreen' ||  (this.currentScreenComponent === 'TestScreen' && store.state.isFeedbackMode);
      },
      showTimer() {
        return this.currentScreenComponent === 'TestScreen' && !store.state.isFeedbackMode;
      },
  },
  components: {
      HomeScreen,
      ContentScreen,
      TestScreen,
      NavigationMenu,
      PopUp,
      EndScreen,
  },
  created() {
      store.commit('initAreExerciseQuestionsAnswered');
      store.commit('initArePagesViewed');
  }
}
</script>

<style>
  @import './../style.css';
</style>

<style scoped>
  .timer {
    pointer-events: none;
    right: 3vmin;
    width: 16vmin;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 3.5vmin;
  }

  .timer img {
    height: 70%;
  }
</style>
