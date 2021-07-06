<template>
    <ul class="accordion-container">
        <slot></slot>
    </ul>
</template>

<script>

export default {
    name: 'AccordionContainer',
    props: {
      
    },
    data() {
      return {
        Accordion: {
          count: 0,
          active: null
        }
      };
    },
    provide() {
      return { Accordion: this.Accordion };
    },
    methods: {
      activateChapter(){
          this.Accordion.active = this.$store.state.currentContentChapter - 1;
      },
      closeAll(){
          this.Accordion.active = null;
      }
    }
}
</script>

<style scoped>
    .accordion-container {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>