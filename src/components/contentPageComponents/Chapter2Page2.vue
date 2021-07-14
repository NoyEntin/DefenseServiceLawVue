<template>
    <div class="page-content chapter2-page2">
        <div class="content-title">משך תקופת סעיף 20 למלש"ב</div>
        <p>משך סעיף 20 הינו פרק הזמן בו יש לקרוא למלש"ב לגיוס. כל חריגה מפרק זמן זה תגרור שירות בהתאם למשך זמן החריגה. במידה ונחרוג ביותר משנה, קרי 366 ימי קיצור, המלש"ב יהיה זכאי לפטור.</p>
        <p>כיצד הוא מחושב?</p>
        
        <table class="table">
            <tr>
                <th>מסלול</th>
                <th>משך סעיף 20</th>
            </tr>
            <tr>
                <td class="table-bold">מלש"ב שהיה אזרח ישראלי או תושב קבע בהגיעו לגיל 18 עברי</td>
                <td>תוך שנתיים מגיל 18 עברי</td>
            </tr>
            <tr>
                <td class="table-bold">קבלת מעמד אזרחי- תאריך עלייה/תאריך קבלת אזרחות או קבלת מעמד תושב קבע</td>
                <td>שנתיים ממועד קבלת מעמד אזרחי- אזרח/תושב קבע</td>
            </tr>
            <tr>
                <td class="table-bold">דחיית גיוס</td>
                <td>שנה מתום דחיית הגיוס</td>
            </tr>
            <tr>
                <td class="table-bold">חתימת דיחוי לאוכלוסיית בני"ש</td>
                <td>שנתיים ממועד הגשת דיחוי אחרון</td>
            </tr>
        </table>
        <p class="download-btn-container">
            <a class="download-btn" :href="`${publicPath}mediaForDownload/section13chart.png`" download='section13chart.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד טבלה
            </a>
        </p>

        <div class="example-container">
            <div class="example-title">
                <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                    <path d="M 0 50 L 60 0 L 300 0 L 300 100 L 60 100 L 0 50" fill="var(--yellow)"></path>
                </svg>
                <p>לדוגמא:</p>
            </div>
            <img src="../../media/graphics/calendar.svg" class="example-icon"/>
            <div class="example-header">
                תאריך אחרון לבקשת הפטור: 4/4/2020
            </div>
            <div class="example-content">
                <p>
                דנה הייתה בת 18 בתאריך 03/03/2020. דנה זומנה למיון לייעודי לקצונה בתאריך 04/04/2020, על כך המועד האחרון בו תוכל דנה להגיש בקשה לפטור מטעמי הווי משפחתי דתי הינו 04/04/2020. לאחר הגשת בקשה זו לא ניתן לזמן לצו ראשון. פטור מטעם זה נידון בוועדה של משרד הביטחון. 
                </p>
                <img class="example-graph" src="../../media/graphics/example1-2.svg">
            </div>
            <img src="../../media/graphics/example1-1.svg">
        </div>

        <div class="example-container">
            <div class="example-title">
                <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                    <path d="M 0 50 L 60 0 L 300 0 L 300 100 L 60 100 L 0 50" fill="var(--yellow)"></path>
                </svg>
                <p>לדוגמא:</p>
            </div>
            <img src="../../media/graphics/calendar.svg" class="example-icon"/>
            <div class="example-header">
                סעיף 20: 1/1/2021
            </div>
            <div class="example-content">
                <p>
                יוליה הייתה בת 18 ב-1/1/21 ועל כן מועד אחרון לקריאה ליוליה לשירות מלא הינו מועד ס.20 שלה 1/1/23. במידה ונדחה גיוסה של יוליה ללא בקשתה וללא סיבה מוצדקת (כפי שיפורט בהמשך) למועד 1/6/23 יקוצר שירותה ב-5 חודשים.
במידה ונדחה גיוסה ללא בקשתה וללא סיבה מוצדקת למועד 2/1/24 יוליה תהייה זכאית לפטור משירות ביטחון.  
                </p>
                <img class="example-graph" src="../../media/graphics/example2-2.svg">
            </div>
            <img src="../../media/graphics/example2-1.svg">
        </div>

        <div class="example-container">
            <div class="example-title">
                <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                    <path d="M 0 50 L 60 0 L 300 0 L 300 100 L 60 100 L 0 50" fill="var(--yellow)"></path>
                </svg>
                <p>לדוגמא:</p>
            </div>
            <img src="../../media/graphics/calendar.svg" class="example-icon"/>
            <div class="example-header">
                סעיף 20: 1/1/2021
            </div>
            <div class="example-content">
                <p>
                דנה הינה מלש"בית  שנולדה בחו"ל והגיעה לארץ בגיל 19 בתאריך 1/1/20 וביצעה עליה ולכן קיבלה ממעד אזרחית בתאריך 1/7/20 כאשר היא בת 19 וחצי. מועד סעיף 20 שלה הינו שנתיים ממועד קבלת מעמד אזרחי כלומר תאריך העלייה ולכן יהיה 1/7/22.
                </p>
                <img class="example-graph" src="../../media/graphics/example2-2.svg">
            </div>
            <img src="../../media/graphics/example3-1.svg">
        </div>

        

    </div>
</template>

<script>
import ShowMore from './ShowMore.vue'

export default {
    components: { 
        ShowMore
    },
    name: 'Chapter2Page2',
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
    created() {
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>
.chapter2-page1-definitions-container {
    height: 22vh;
    font-weight: bold;
}

.definition {
    background-color: rgb(254, 227, 173);
}
</style>