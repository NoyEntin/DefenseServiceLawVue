<template>
    <div class="page-content chapter1-page1">
        <div class="page-title">יוצאים לדרך</div>
        <p>
            <b>חוק שירות ביטחון</b>
             הוא החוק המסדיר את הוראות הגיוס 
             <b>לשירות סדיר</b>
             בצה"ל.<br>
            החוק פורסם ב-1986 והתיקון האחרון היה ב-2019 (תיקון מס' 23).<br>
            <b>תקנות</b>
             - חקיקת משנה – הוראות משלימות לחוק שנקבעו ע"י גורמים של הרשות הממשלה.
        </p>
        <p>
            <b>לפני שנתחיל לחקור את החוק</b>
            - יש כמה מושגים שחייבים לדעת:
        </p>
        <div class="chapter1-page1-definitions-container definitions-container">
            <div class="kid definition"  @mouseover="activateOverlay" @mouseout="deactivateOverlay">
                <div class="definition-overlay">
                    <div>
                       <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        אזרח ישראלי או תושב קבוע
                        </p>
                    </div>
                    <div>
                        <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        מלאו לו 16.5 (עברי)
                        </p>
                    </div>
                    <div>
                        <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        טרם קיבל פטור מחמת גיל לפי ס' 36א
                        </p>
                    </div>
                    <div>
                        <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        טרם התייצב לשירות סדיר או מילואים (כלומר- מעולם לא חויל)
                        </p>
                    </div>
                </div>
            </div>
            <div class="teen definition"  @mouseover="activateOverlay" @mouseout="deactivateOverlay">
                <div class="definition-overlay">
                    <div>
                       <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        אזרח ישראלי או תושב קבוע
                        </p>
                    </div>
                    <div>
                        <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        מלאו לו 18 (עברי)
                        </p>
                    </div>
                    <div>
                       <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        טרם קיבל פטור מחמת גיל לפי ס' 36א
                        </p>
                    </div>
                </div>
            </div>
            <div class="officer definition"  @mouseover="activateOverlay" @mouseout="deactivateOverlay">
                <div class="definition-overlay">
                    <div class="definition-content">
                       <p class="list-icon">
                        &#10003;
                        </p>
                        <p>
                        אדם הממונה ע"י שר הביטחון לטובת מימוש החוק. המינוי שניתן יכול להיות כללי או לסעיפים מסוימים.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="definitions-container definitions-titles">
            <div class="definition">
                מיועד לשירות ביטחון
            </div>
            <div class="definition">
                יוצא צבא
            </div>
            <div class="definition">
                פוקד
            </div>
        </div>
        <p>עכשיו אפשר לצלול לתוך החוק עצמו, אז בואו נתחיל ללמוד את הסעיפים העיקריים בו, הנוגעים לשלב המלש"ב.</p>
    </div>
</template>

<script>

export default {
    name: 'Chapter1Page1',
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
    computed: {

    },
    created(){
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>
.chapter1-page1 .page-title {
    background-image: url("../../media/graphics/page1Title.svg");
    background-size: cover;
}


.chapter1-page1-definitions-container {
    height: 40vh;
    font-weight: bold;
    font-size: calc(0.5em + 1vmin);
    line-height: calc(0.8em + 1.7vmin);
}

.kid {
    background-image: url("../../media/graphics/kid.svg");
    background-size: 85% 85%;
    background-position: center 70%;
}

.teen {
    background-image: url("../../media/graphics/teen.svg");
}

.officer {
    background-image: url("../../media/graphics/officer.svg");
}

</style>