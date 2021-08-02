<template>
    <div class="page-content chapter2-page2">
        <div class="content-title">מסגרת הקריאה לשירות לפי סעיף 20 למלש"ב</div>
        <p>משך סעיף 20 הינו פרק הזמן בו יש לקרוא למלש"ב לגיוס. כל <b>חריגה</b> מפרק זמן זה <b>תגרור קיצור שירות </b>בהתאם למשך זמן החריגה. במידה ונחרוג ב<b>יותר משנה</b>, קרי 366 ימי קיצור, המלש"ב יהיה <b>זכאי לפטור</b>.</p>
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
                <td class="table-bold"><p>דחיית גיוס</p>
        <table class="table inner-table">
            <tr>
                <th>סוגי דחיות גיוס</th>
                <th>אופן חישוב ההארכה</th>
            </tr>
            <tr>
                <td class="table-bold">דחיית גיוס עקב בקשת המלש"ב</td>
                <td>ניתן להאריך 12 חודשים מתום תקופת הדחייה</td>
            </tr>
            <tr>
                <td class="table-bold">שנה מתום לימודים לפי חתימה על טופס סיום אימות</td>
                <td>שנה מתום לימודים לפי חתימה על טופס סיום אימות</td>
            </tr>
            <tr>
                <td class="table-bold">דחיית גיוס לאוכלוסיית בני"ש</td>
                <td>שנה מתום סיום הדיחוי האחרון</td>
            </tr>
            <tr>
                <td class="table-bold">שנה מבקשת גיוס (פתיחת רשומה)</td>
                <td>שנה מתאריך בקשה אישית לגיוס (יש להקפיד על תאריך הבקשה שתצוין וממועד זה שנה)</td>
            </tr>
        </table>
        </td>
                <td>שנה מתום דחיית הגיוס (או 24 חודשים מגיל יוצא צבא, המאוחר מבניהם)</td>
            </tr>
            <!-- <tr>
                <td class="table-bold">חתימת דיחוי לאוכלוסיית בני"ש</td>
                <td>שנתיים ממועד הגשת דיחוי אחרון</td>
            </tr> -->
        </table>
                <p class="download-btn-container">
            <span class="chart-tip"><b>טיפ!</b> אם תורידו את התרשים למחשב, תוכלו להיעזר בו במהלך המבחן</span>
            <a class="download-btn" :href="`${publicPath}mediaForDownload/section-20-duration.png`" download='section-20-duration.png'>
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
                סעיף 20: 01.01.2021
            </div>
            <div class="example-content">
                <p>
                    אופרי ילידת 01.01.2001. גיל 18 עברי שלה הינו 01.01.2019. סעיף 20 שלה הינו 01.01.2021 (גיל 20 עברי). 
                </p>
                <img class="example-graph" src="../../media/graphics/example-top.svg">
            </div>
            <img src="../../media/graphics/example-1.svg">
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
                סעיף 20: 01.01.2023
            </div>
            <div class="example-content">
                <p>
                יוליה הייתה בת 18 עברי ב-01.01.2021 ועל כן מועד אחרון לקריאה ליוליה לשירות מלא הינו מועד ס.20 שלה 01.01.2023. במידה ונדחה גיוסה של יוליה ללא בקשתה וללא סיבה מוצדקת (כפי שיפורט בהמשך) למועד 01.06.2023 יקוצר שירותה ב-5 חודשים.
במידה ונדחה גיוסה ללא בקשתה וללא סיבה מוצדקת למועד 02.01.2024 יוליה תהייה זכאית לפטור משירות ביטחון.  
                </p>
                <img class="example-graph" src="../../media/graphics/example-top.svg">
            </div>
            <img src="../../media/graphics/example-2.svg">
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
                סעיף 20: 01.07.2022
            </div>
            <div class="example-content">
                <p>
                דנה הינה מלש"בית שנולדה בחו"ל והגיעה לארץ בגיל 19 בתאריך 01.01.2020. היא ביצעה עלייה וקיבלה מעמד אזרחית בתאריך 01.07.2020 כאשר היא בת 19 וחצי. מועד סעיף 20 שלה הינו שנתיים ממועד קבלת המעמד האזרחי (תאריך העלייה) ולכן יהיה 01.07.2022.
                </p>
                <img class="example-graph" src="../../media/graphics/example-top.svg">
            </div>
            <img src="../../media/graphics/example-3.svg">
        </div>
    </div>
</template>

<script>
export default {
    components: { 
    },
    name: 'Chapter2Page2',
    props: {

    },
    data() {
        return {
            publicPath: process.env.BASE_URL
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

.example-content {
    padding: 2% 0% 0% 0%;
}

table td{
    vertical-align: top;
}

.inner-table td {
    background-color: white;
    font-weight: normal;
}

.inner-table th {
    background-color: var(--black);
    border-color: white;
}
/*  */

</style>