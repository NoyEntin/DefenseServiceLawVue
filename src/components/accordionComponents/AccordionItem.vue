<template>
  <li class="accordion-item">
    <!-- {{iconName}} -->
    <div 
      class="accordion-trigger"
      :class="{'accordion-trigger-active': visible}"
      @click="open">

      <img :src="iconSrc" :class="isDefaultIcon ? 'arrow-img' : 'icon-img'"/>
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

      <div class="accordion-content"
        v-show="visible">
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
      </div>
  </li>
</template>


<script>
export default {
  name: 'AccordionItem',
  props: {
      iconName: {
          type: String,
          default: 'arrowDown.svg'
      }
  },
  inject: ["Accordion"],
  data() {
    return {
      index: null,
      defaultIconName: 'arrowDown.svg'
    };
  },
  computed: {
    visible() {
      return (this.index == this.Accordion.active);
    },
    iconSrc() {
      return require('./../../media/graphics/' + this.iconName);
    },
    isDefaultIcon() {
      return this.iconName === this.defaultIconName
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
    
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style scoped>
.accordion-item {
  cursor: pointer;
  position: relative;
}

.accordion-trigger {
    background-color: var(--blue);
    box-shadow: 0 4px 2px -2px gray;
    display: flex;
    align-items: center;
    color: white;
    height: 6vmin;
}

.accordion-trigger:hover {
  background-color: #2fb6a8;
}

.accordion-trigger .arrow-img {
    transform: rotate(90deg);
    margin: 0vmin 2vmin;
    height: 100%;
    width: 5vmin;
    transition: transform 0.2s;
}

.accordion-trigger-active .arrow-img {
  transform: rotate(0deg);
}

.accordion-trigger .icon-img {
    margin-left: 2vmin;
    height: 100%;
}
.accordion-trigger-active .icon-img {
    height: 120%;
}

</style>