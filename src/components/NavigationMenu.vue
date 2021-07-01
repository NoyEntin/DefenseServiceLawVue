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
        <!-- <img src="./../media/graphics/menuKey.svg"> -->
        <ul class="key-list-1">
          <li> - קראת אבל לא תרגלת</li>
        </ul>
        <ul class="key-list-2">
          <li> - קראת ותרגלת</li>
        </ul>
        <div>כדי לעשות את המבחן יש להשלים את כל הנושאים</div>
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
    background-image: url('./../media/graphics/menuKey.svg');
    background-repeat: no-repeat;
    background-size: ;
    position: absolute;
    bottom: 0vmax; 
    /* right: 2.5vmax; */
     /* height: 20vmax; */
    width: 90%;
   /* max-width: 30vh;
    max-height: 30vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 2vmin; */
    /* padding-top: 5vmax; */
    /* box-sizing: border-box; */
    /* font-size: 1em; */
    /* line-height: 1.3vmax; */
  }
  /* .key-list-1,
  .key-list-2 {
    text-indent: 3vmax;
    margin-bottom: 0.5vmax;
  } */

  .key-list-1 {
    /* list-style: none; */
  }

  .key-list-1:before{
    /* content: '';
    display: inline-block;
    height: 2em;
    width: 2em;
    background-image: url('./../media/graphics/EmptyEye.svg');
    background-repeat: no-repeat; */
}

  .key-list-2 {
    /* list-style: none; */
  }

  .key-list-2:before{
    /* content: '';
    display: inline-block;
    height: 2em;
    width: 2em;
    background-image: url('./../media/graphics/fullEye.svg');
    background-repeat: no-repeat; */
}

</style>