<template>
    <div class="page-content chapter2-page5">
        <div class="content-title">העמקה שנה שלישית</div>
        <p>
            כאמור בסעיפים קודמים, משך זמן סעיף 20 מחולק ל-3 תקופות. שימו לב כי כל תקופה בלתי נמנית אשר מתקיימת במהלך התקופה השלישית של סעיף 20, לא ניתן להארכה והיא הופכת לנמנית.
        </p>

        <InteractiveExample>
        </InteractiveExample>

    </div>
</template>

<script>
import InteractiveExample from './InteractiveExample.vue'


export default {
    components: { 
        InteractiveExample
    },
    name: 'Chapter2Page5',
    props: {

    },
    data() {
        return {

        }
    },
    created() {
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>

</style>