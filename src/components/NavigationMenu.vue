<template>
  <div class="navigation-menu-overlay">
    <div class="navigation-menu-container">
        <AccordionContainer>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>חוק שירות ביטחון</h3>
              </template>
              <template v-slot:accordion-content>
                <ul>
                  <il><p>יוצאים לדרך</p></il>
                  <il><p>סעיפים בנושא הצו הראשון</p></il>
                  <il><p>סעיפים בנושא צו הגיוס</p></il>
                  <il><p>סעיפים בנושא בני ישיבות</p></il>
                  <il><p>סעיפים בנושא דחיות גיוס ופטור </p></il>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>סעיף 20</h3>
              </template>
              <template v-slot:accordion-content>
                <ul>
                  <il><p>יוצאים לדרך</p></il>
                  <il><p>סעיפים בנושא הצו הראשון</p></il>
                  <il><p>סעיפים בנושא צו הגיוס</p></il>
                  <il><p>סעיפים בנושא בני ישיבות</p></il>
                  <il><p>סעיפים בנושא דחיות גיוס ופטור </p></il>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem>
              <template v-slot:accordion-trigger>
                <h3>משתמטים</h3>
              </template>
              <template v-slot:accordion-content>
                <ul>
                  <il><p>יוצאים לדרך</p></il>
                  <il><p>סעיפים בנושא הצו הראשון</p></il>
                  <il><p>סעיפים בנושא צו הגיוס</p></il>
                  <il><p>סעיפים בנושא בני ישיבות</p></il>
                  <il><p>סעיפים בנושא דחיות גיוס ופטור </p></il>
                </ul>
              </template>
            </AccordionItem>
        </AccordionContainer>
    </div>
  </div>
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

    },
    computed: {

    },
}
</script>

<style scoped>
    .navigation-menu-overlay {
        position: absolute;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
        top: 12vmin;
        height: calc(100vh - 12vmin);
        width: 100%;
    }

    .navigation-menu-container {
        position: absolute;
        background-color: var(--lighten-blue);
        height: 100%;
        width: 25vmax;
        max-width: 40vh;
    }
    
    ul {
      width: 100%;
      height: 100%;
      padding: 0;
    }

    li p:hover {
      background-color: var(--lighten-blue);
    }
    /* .accordion-container {
        width: 80%;
        margin: 0% 10%;
    } */
</style>