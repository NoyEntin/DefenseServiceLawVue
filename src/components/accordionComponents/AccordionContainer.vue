<template>
    <ul class="accordion-container">
        <slot></slot>
    </ul>
</template>

<script>

export default {
    name: 'AccordionContainer',
    props: {},
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