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
          <div>כדי לעשות את המבחן יש להשלים את כל הנושאים</div>
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
    background-color: var(--lighten-blue);
    height: 100%;
    width: 25vmax;
    max-width: 40vh;
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
  
  .current-page {
    background-color: white;
  }

  .current-page:hover {
    background-color: white;
  }

  .key {
    position: absolute;
    bottom: 2%;
    display: flex;
    flex-flow: column nowrap;
    right: 50%;
    transform: translateX(50%);
    width: 90%;
  }

  .key-text-container {
    position: relative;
    border: var(--yellow) 1.2vmin solid;
    background-color: var(--blue);
    border-top: none;
    min-height: 23vmin;
  }

  .key-image {
    margin-bottom: -1%;
  }

</style>