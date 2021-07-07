<template>
    <div class="page-content chapter2-page3">
        <div class="content-title">אופן חישוב התקופות הבלתי נמנות:</div>
        <p>כאמור תקופה בלתי נמנית הינה התקופה בה התעכב הגיוס של המלש"ב "שלא באשמת המערכת" ומשמעותה שניתן להאריך סעיף 20, כלומר על כל תקופה בלתי נמנית יאורך המועד האחרון לגיוס המלש"ב בהתאם למספר הימים של התקופה הבלתי נמנית.</p>
        <ol class="hebrew-list">
            <li>
                <b>שימו לב!</b>
                לא ניתן להאריך סעיף 20 על תקופות בלתי נמנות שהיו במהלך השנה השלישית למניית סעיף 20. ככלל כל ההארכות בגין תקופות בלתי נמנות ייספרו רק במידה והיו בזמן הגדרתו כמלש"ב (גיל 16.5 עברי) ובמהלך השנתיים לספירת סעיף 20 בלבד.
            </li>
            <li>לא ניתן להאריך על תקופות חופפות. כלומר על כל יום בתקופה בלתי נמנית יהיה ניתן להאריך רק יום אחד מסיבה אחת.</li>
        </ol>
        <div class="warning-container">
            <div class="warning left-warning">
                <img src="../../media/graphics/warning.svg"/>
                <p>לא מאריכים על שנה 3!</p>
            </div>
            <div class="warning right-warning">
                <p>יום אחד מסיבה אחת!</p>
                <img src="../../media/graphics/warning.svg"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chapter2Page3',
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
        activateOverlay(event) {
            var overlay=$(event.target.childNodes[0]);
            overlay.addClass('overlay-active');
        },
        deactivateOverlay(event) {
            var overlay=$(event.target.childNodes[0]);
            overlay.removeClass('overlay-active');
        }
    },
    created() {
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>
.warning-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.warning {
    background-color: var(--lighten-yellow);
    display: flex;
    width: fit-content;
    align-items: center; 
}

.warning p {
    margin: 0;
}

.warning img {
    width: 8.5vmin;
    min-height: 1.8em;
}

.left-warning {
    padding-left: 2%;
    transform: rotateZ(10deg);
    margin-top: 5%;
}

.right-warning {
    padding-right: 2%;
    transform: rotateZ(350deg);
    margin-top: 3%;
}

.left-warning img {
    margin-right: -4.25vmin;
}

.right-warning img {
    margin-left: -4.25vmin;
}

</style>