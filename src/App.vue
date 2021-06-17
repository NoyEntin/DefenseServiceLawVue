<template>
    <div id="app">
        <div class="background"></div>
        <div class="top-bar">
            <!-- Show only if page isn't test page -->
            <div v-if="currentScreenComponent !== 'TestScreen'" class="top-bar-button menu-btn" title="תפריט">
                <span class="menu-icon"></span>
            </div>
            <!-- is mtv if hompage -->
            <div v-if="currentScreenComponent === 'HomeScreen'" class="top-bar-button mtv-btn">
                MTV
            </div>
            <!-- is mtv if hompage -->
            <div v-else-if="currentScreenComponent === 'ContentScreen'" class="top-bar-button home-btn">
            </div>

            <div class="title">
                לומדת חש"ב
            </div>
            <div class="top-bar-button law-btn" title="החוק עצמו"></div>
        </div>
        <!--
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
    </div>
</template>

<script>
import store from './store/index';
import HomeScreen from './components/HomeScreen.vue';
import ContentScreen from './components/ContentScreen.vue';
import TestScreen from './components/TestScreen.vue';

export default {
    name: 'App',
    data() {
        return {
            screenComponentNames: ["HomeScreen", "ContentScreen", "TestScreen"],
        }
    },
    methods: {
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
        TestScreen
    }
}
</script>

<style>
  @import './style.css';
</style>

<style scoped>
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
    right: 14vmin;
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

  .menu-icon:hover:before {
    box-shadow: 0 0 0 #fff;
    transform: translateY(12px) rotate(45deg);
  }

  .menu-icon:hover:after{
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
