<template>
  <div id="app">
        <div class="direction">
            <v-date-picker class="calendar" v-model="date1" />
            <v-date-picker class="calendar" v-model="date2" />
            <p v-if="areDatesPicked">ההפרש בין שני התאריכים הוא {{days}} ימים</p>
            <p v-else>סמנו שני תאריכים כדי לקבל את ההפרש ביניהם</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'DateCalc',
  data() {
      return {
            date1: new Date(),
            date2: new Date(),
            areDatesPicked: true
      }
  },
  methods: {
    
  },
  computed: {
      areDatesPicked(){
          return this.date1 !== null && this.date2 !== null
      },
      days() {
            if(!this.areDatesPicked)
                return 0;
            const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            return Math.round(Math.abs((this.date1 - this.date2) / oneDay));
      }
  },
}
</script>

<style>
  @import './../../style.css';
</style>

<style scoped>
    .calendar {
        width: 45vw;
        margin: 2.5vw;
        max-height: calc(100vh - 5vw);
    }

    p {
        text-align: center;
    }

    .direction {
        direction: ltr;
    }
</style>
