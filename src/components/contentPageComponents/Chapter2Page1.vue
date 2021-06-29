<template>
    <div class="page-content chapter2-page1">
        <div class="content-title">סעיף 20 לחוק שירות ביטחון</div>
        <ShowMore :isLawSection="true">
            <template v-slot:section-name>
            </template>
            <template v-slot:section-content>
            </template>
        </ShowMore>
        <p>סעיף 20 מגדיר את התקופה המותרת לקריאתו לשירות סדיר של מיועד לשירות ביטחון, כלומר פרק הזמן מהגיעו לגיל 18 עברי או קבלת אזרחות ישראלית עד למועד גיוסו.</p>
        <p class="content-title">תקופות נמנות ובלתי נמנות</p>
        <p>התקופות מחולקות לתקופות נמנות ותקופות בלתי נמנות לחישוב פרק הזמן המותר לקרוא לשירות ביטחון.</p>
        <div class="definitions-container definitions-titles">
            <div class="definition">
                תקופות בלתי נמנות
            </div>
            <div class="definition">
                תקופות נמנות
            </div>
        </div>
        <div class="chapter2-page1-definitions-container definitions-container">
            <div class="uncountedPeriod definition"  @mouseover="activateOverlay" @mouseout="deactivateOverlay">
                <div class="definition-overlay">
                    <p>
                        התקופות בהן התעכב הגיוס של המלש"ב "שלא באשמת המערכת" או לאחר בקשה אישית של המועמד ועל כן אינן חלק מהתקופה המחושבת. על תקופות אלו נוכל לקבל "הארכת זמן" לגיוס המלש"ב.
                    </p>
                </div>
            </div>
            <div class="countedPeriod definition"  @mouseover="activateOverlay" @mouseout="deactivateOverlay">
                <div class="definition-overlay">
                    <p>
                        התקופות בהן התעכב הטיפול/נדחה גיוסו של המלש"ב בשל תקלה/גורם מערכתי. תקופות אלו נספרות בסעיף 20, ולא נקבל עליהן "פיצוי" בצורת זמן נוסף לגיוס המלש"ב, מכיוון שהעיכוב באחריותנו.
                    </p>
                </div>
            </div>
        </div>
        <p>
            לדוגמא, ההגדרה המערכתית "ר"פ פתוח" מסמנת לא לגייס מלש"ב בעל ר"פ (רישום פלילי), אך אינה מוגדרת בחוק כמונעת גיוס. מכיוון שמדובר בגורם מערכתי, התקופה נמנית עבור סעיף 20.
        </p>
        <p>
            דוגמא נוספת, המתנה למסמכים מגורמי טיפול ללא זימון/ביטול זימונים למדור זימונים למדור ברה"ן לאור פער בפסיכיאטר.
        </p>
    </div>
</template>

<script>
import ShowMore from './ShowMore.vue'

export default {
    components: { 
        ShowMore
    },
    name: 'Chapter2Page1',
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
}
</script>

<style scoped>
.chapter2-page1-definitions-container {
    height: 22vh;
    font-weight: bold;
    font-size: calc(0.5em + 1vmin);
    line-height: calc(0.8em + 1.7vmin);
}

.countedPeriod {
    background-image: url("../../media/graphics/countedPriod.png");
    background-size: auto 80%;
}

.uncountedPeriod {
    background-image: url("../../media/graphics/uncountedPriod.png");
    background-size: auto 80%;
}

.definition {
    background-color: rgb(254, 227, 173);
}
</style>