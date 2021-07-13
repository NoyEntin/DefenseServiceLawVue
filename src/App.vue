<template>
  <div id="app">
    <div class="background"></div>
    <div class="top-bar">
      <div class="overlay" v-show="isMenuOpen"></div>
      <!-- Show only if page isn't test page -->
      <div v-if="currentScreenComponent !== 'TestScreen'" class="top-bar-button menu-btn on-overlay" @click="openMenu" title="תפריט">
        <span class="menu-icon" :class="{'menu-icon-open': isMenuOpen}"></span>
      </div>
      <!-- is mtv if hompage -->
      <div v-if="currentScreenComponent === 'HomeScreen'" class="top-bar-button mtv-btn">
        MTV
      </div>
      <!-- is back to home if content page -->
      <!-- <div v-else-if="currentScreenComponent === 'ContentScreen' || currentScreenComponent === 'TestScreen'" class="top-bar-button home-btn" @click="$store.commit('backToHome')"> -->
      <div v-else-if="currentScreenComponent === 'ContentScreen'" class="top-bar-button home-btn" @click="$store.commit('backToHome')">
      </div>
      <div class="title">
        לומדת חש"ב
      </div>
      <div class="top-bar-button law-btn" title="החוק עצמו"></div>
    </div>


      <!-- <iframe src="./media/animations/lawBtn.html" scrolling="no" style="width:640px; height:480px; margin:0; padding:0; border:none; overflow:hidden"></iframe> -->
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
    <component v-bind:is="currentScreenComponent"></component>

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
import store from './store/index';
// import "./createjs.min.js";
// import * as lawBtn from './media/animations/lawBtn.js';
import HomeScreen from './components/HomeScreen.vue';
import ContentScreen from './components/ContentScreen.vue';
import TestScreen from './components/TestScreen.vue';
import NavigationMenu from './components/NavigationMenu.vue';
import PopUp from './components/PopUp.vue';
import EndScreen from './components/EndScreen.vue';

export default {
  name: 'App',
  emits: ['triggerOpenMenu', 'navigateToPage', 'changeDontShowAgain'],
  data() {
      return {
          screenComponentNames: ["HomeScreen", "ContentScreen", "TestScreen", "EndScreen"],
          isMenuOpen: false,
          popUpShowing: false,
          chapterToNavigateTo: 0,
          pageToNavigateTo: 0,
          dontShowAgain: false,
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
      console.log("app is saying: " + this.chapterToNavigateTo + " and " + this.pageToNavigateTo);
      this.ClosePopUp();
      this.openMenu();
      this.$store.commit('updateCurrentContentChapter', this.chapterToNavigateTo + 1);
      this.$store.commit('updateCurrentContentPage', this.pageToNavigateTo);
      this.$store.commit('loadContentScreen');
    },
    changeDontShowAgain() {
      this.dontShowAgain = !this.dontShowAgain;
    }
  },
  store,
  computed: {
      currentScreenIndex() {
          return this.$store.state.currentScreenIndex
      },
      currentScreenComponent() {
          return this.screenComponentNames[this.currentScreenIndex];
      }
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
  @import './style.css';
</style>

<style scoped>

  @keyframes slideEnter {
    0% {
      right: -25%;
    }
    100% {
      right: 0%;
    }
  }

  @keyframes slideLeave {
    0% {
      right: 0%;
    }
    100% {
      right: -25%;
    }
  }

  @-webkit-keyframes slideEnter {
    0% {
      right: -25%;
    }
    100% {
      right: 0%;
    }
  }

  @-webkit-keyframes slideLeave {
    0% {
      right: 0%;
    }
    100% {
      right: -25%;
    }
  }

  @keyframes delayOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  @-webkit-keyframes delayOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .delay-overlay-leave-active {
    animation: delayOverlay 0.6s;
  }

  .slide-enter-active {
    animation: slideEnter 0.6s;
  }

  .slide-leave-active {
    animation: slideLeave 0.6s;
  }

  .navigation-menu-overlay {
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    top: 12vmin;
    height: calc(100vh - 12vmin);
    width: 100%;
  }

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url("media/graphics/background.png");
    opacity: 0.5;
    background-size: 500px;
    z-index: -1;
  }

  .top-bar {
    background-color: var(--black);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 12vmin;
  }

  .top-bar-button {
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    width: 7vmin;
    height: 7vmin;
    top: 2.5vmin;
    color: white;
    border: white solid 1px;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    transition: 100ms ease-out;
  }

  .top-bar-button:hover {
    background-color: var(--darken-black);
    background-size: 70% 70%;
  }

  .menu-btn {
    right: 3vmin;
  }

  .mtv-btn {
    background-color: blue;
    left: 14vmin;
  }

  .home-btn {
    background-image: url("media/graphics/home.png");
    right: 14vmin;
  }

  .law-btn {
    left: 3vmin;
    background-image: url("media/graphics/whiteLaw.svg");
  }

  .menu-icon {
    display: block;
    width: 5vmin;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-icon:before,
  .menu-icon:after {
    background-color: #fff;
    content: '';
    display: block;
    height: 4px;
    transition: all 200ms ease-in-out;
  }
  
  .menu-icon:before {
    box-shadow: 0 12px 0 #fff;
    margin-bottom: 20px;
  }

  /* .menu-icon:hover:before {
    box-shadow: 0 0 0 #fff;
    transform: translateY(12px) rotate(45deg);
  }

  .menu-icon:hover:after{
    transform: translateY(-12px) rotate(-45deg);
  } */

  .menu-icon-open:before {
    box-shadow: 0 0 0 #fff;
    transform: translateY(12px) rotate(45deg);
  }

  .menu-icon-open:after{
    transform: translateY(-12px) rotate(-45deg);
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9vmin;
    font-family: neo;
  }
</style>
