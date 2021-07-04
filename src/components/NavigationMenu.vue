<template>
  <!-- <div class="navigation-menu-overlay"> -->
    <div class="navigation-menu-container">
      <transition name="slide">
        <AccordionContainer>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>חוק שירות ביטחון</h3>
              </template>
              <template v-slot:accordion-content>
                <ul class="chapter-ul" @click="clicked">
                  <li class="page-li" data-chapter="1" data-page="1">יוצאים לדרך</li>
                  <li class="page-li" data-chapter="1" data-page="2">סעיפים בנושא הצו הראשון</li>
                  <li class="page-li" data-chapter="1" data-page="3">סעיפים בנושא צו הגיוס</li>
                  <li class="page-li" data-chapter="1" data-page="4">סעיפים בנושא בני ישיבות</li>
                  <li class="page-li" data-chapter="1" data-page="5">סעיפים בנושא דחיות גיוס ופטור</li>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>סעיף 20</h3>
              </template>
              <template v-slot:accordion-content>
                <ul class="chapter-ul">
                  <li class="page-li" >סעיף 20 לחוק שירות ביטחון</li>
                  <li class="page-li" >משך תקופת סעיף 20 למלש"ב</li>
                  <li class="page-li" >אופן חישוב בתקופות במלתי נמנות</li>
                  <li class="page-li" >חישוב הארכת סעיף 20</li>
                  <li class="page-li" >העמקה שנה שלישית</li>
                  <li class="page-li" >משך טיפול בקשה מותר</li>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>משתמטים</h3>
              </template>
              <template v-slot:accordion-content>
                <ul class="chapter-ul">
                  <li class="page-li" >קודם כל - מי הוא משתמט</li>
                  <li class="page-li" >לפני ההכרזה</li>
                  <li class="page-li" >הכרזת השתמטות</li>
                  <li class="page-li" >סוגי משתמטים</li>
                  <li class="page-li" >התייצבות משתמט</li>
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
  <!-- </div> -->
</template>

<script>
import AccordionContainer from "./accordionComponents/AccordionContainer"
import AccordionItem from "./accordionComponents/AccordionItem"

export default {
    name: 'NavigationMenu',
    components: {
        AccordionContainer,
        AccordionItem
    },
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
      clicked(event, el) {
        console.log("clicked!");
        var el = event.currentTarget;
        var chapter = el.getAttribute('data-chapter');
        var page = el.getAttribute('data-page');

        console.log(el);
        console.log(chapter);
        console.log(page);
        // console.log(this.name);
      }
    },
    computed: {

    },
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
    background-color: white;
  }

  .page-li {
    padding: 1vmin;
  }
  
  /* .accordion-container {
      width: 80%;
      margin: 0% 10%;
  } */

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