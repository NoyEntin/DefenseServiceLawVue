<template>
       <div class="navigation-menu-container">
      <transition name="slide">
        <AccordionContainer ref="menuAccordion">
            <AccordionItem  v-for="(chapterName, chapterIndex) in chapterNames" :key="'chapter' + chapterIndex">
              <template v-slot:accordion-trigger>
                <h3>{{chapterName}}</h3>
              </template>
              <template v-slot:accordion-content>
                <ul class="chapter-ul">
                  <li v-for="(page, pageIndex) in navigationData[chapterIndex]"
                  @click="navigateToPage($event, chapterIndex, pageIndex)"
                  :key="'chapter' + chapterIndex + 'page' + pageIndex" class="page-li"
                  :class="{'current-page': isContentScreen && chapterIndex === currentChapter && pageIndex === currentPage}">
                 <!--   {{page + " " + isViewed}}-->
                      {{page}}
                  </li>
                </ul>
              </template>
            </AccordionItem>
        </AccordionContainer>
      </transition>
      <div class="key">
        <img class="key-image" src="./../media/graphics/menuKeyTest.svg">
        <div class="key-text-container">
          <ul class="key-list-1">
            <li> - קראת אבל לא תרגלת</li>
          </ul>
          <ul class="key-list-2">
            <li> - קראת ותרגלת</li>
          </ul>
          <div class="key-text">כדי לעשות את המבחן יש להשלים את כל הנושאים</div>
        </div>
      </div>
    </div>
</template>

<script>
import AccordionContainer from "./accordionComponents/AccordionContainer"
import AccordionItem from "./accordionComponents/AccordionItem"

import { mapGetters } from "vuex";

export default {
    name: 'NavigationMenu',
    components: {
        AccordionContainer,
        AccordionItem,
    },
    props: {

    },
    data() {
        return {
          chapterNames: this.$store.state.chapterNames,
          navigationData: this.$store.state.navigationData,
        }
    },
    methods: {
      navigateToPage(event, chapterIndex, pageIndex) {
        this.$store.commit('updateCurrentContentChapter', chapterIndex + 1);
        this.$store.commit('updateCurrentContentPage', pageIndex);
        this.$store.commit('loadContentScreen');
        this.$emit('triggerOpenMenu');
      }
    },
    computed: {
      isContentScreen(){
        return this.$store.getters.isContentScreen
      },
      currentPage(){
        return this.$store.state.currentContentPageIndex
      },
      currentChapter(){
        return this.$store.state.currentContentChapter - 1
      },
      ...mapGetters(["contentPageName"])
    },
    watch: {
        contentPageName: function() {
          this.$refs.menuAccordion.activateChapter();
        },
        isContentScreen: function() {
          if(!this.isContentScreen){
              this.$refs.menuAccordion.closeAll();
          }
        },
    }
}
</script>

<style scoped>

  .navigation-menu-container {
    position: absolute;
    display: flex;
    background-color: var(--lighten-blue);
    height: 100%;
    width: 25vmax;
    max-width: 40vh;
    /* min-width: 25vw; */
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    overflow: auto;
  }

  .accordion-container {
    width: 100%;
  }

  .chapter-ul {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .page-li:hover {
    background-color: rgba(245, 244, 244, 0.7)
  }

  .page-li {
    padding: 1vmin;
  }

  .key-list-1,
  .key-list-2{
    list-style: none;
  }

  .key li {
    position: relative;
    text-indent: 1vmin;
  }

  .key ul {
    margin: 1vmin;
  }

  .key-list-1 li::before {
    content: "";
		position: absolute;
		right: -1.5em;
		top: 1vmin;
		width: 1.5em;
		height: 1.5em;
    background-image: url('./../media/graphics/EmptyEye.svg');
    background-repeat: no-repeat;
  }
  
  .key-list-2 li::before {
    content: "";
		position: absolute;
		right: -1.5em;
		top: 1vmin;
		width: 1.5em;
		height: 1.5em;
    background-image: url('./../media/graphics/fullEye.svg');
    background-repeat: no-repeat;
  }
  
  .current-page {
    background-color: white;
  }

  .current-page:hover {
    background-color: white;
  }

  .key {
    /* position: absolute; */
    margin: 5%;
    display: flex;
    flex-flow: column nowrap;
    /* right: 50%;
    transform: translateX(50%); */
    width: 80%;
    font-size: calc(0.7em + 0.5vmin);
  }

  .key-text-container {
    position: relative;
    border: var(--yellow) 1vmin solid;
    background-color: var(--blue);
    border-top: none;
  }

  .key-image {
    margin-bottom: -5%;
  }

  .key-text {
    text-align: center;
    margin-bottom: 5%;
  }

</style>