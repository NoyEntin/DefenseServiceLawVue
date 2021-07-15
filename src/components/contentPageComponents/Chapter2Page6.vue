<template>
    <div class="page-content chapter2-page6">
        <div class="content-title">משך טיפול בקשה מותר</div>
        <p>
            אי אפשר להאריך לנצח! לכל בקשת מלש"ב אורך טיפול מותר, וסעיף 20 יוארך בהתאם (בהתאם להקמ"א מ"ג 01-20).
        </p>
         <table class="table">
            <tr>
                <th>מהות הבקשה</th>
                <th>משך הטיפול המקסימלי עליו ניתן להאריך סעיף 20</th>
            </tr>
            <tr>
                <td class="table-bold">בקשה להכרה בשירות צבאי בצבא צרפת</td>
                <td>6 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה להכרה בשירות צבאי בצבא זר</td>
                <td>חודשיים</td>
            </tr>
            <tr>
                <td class="table-bold">ערעור על קביעת הפרופיל הרפואי בלשכת הגיוס האזורית</td>
                <td>6 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לפטור מחש"ב - נשואה או אם לילד</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשת עולה חדש לקבלת מעמד מהגר</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לפטור מחש"ב מטעמי הווי משפחתי דתי או מצפון – נשים</td>
                <td>4 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לפטור מחש"ב מטעמי הכרה דתית – נשים</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה להכרת המלש"ב כרופא ע"י צה"ל בוועדת רופאים</td>
                <td>6 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה להקדמת/דחיית גיוס</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">ערעור על החלטת וועדת בפטור מחש"ב מטעמים שבהווי משפחתי דתי או מצפון – נשים</td>
                <td>6 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">מיוני התאמה ליחידות התנדבות</td>
                <td>3 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">מיוני התאמה קורסי קד"צ</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשות חריגות להצטרפות למסלולים השונים</td>
                <td>3 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לדח"ג עקב הצטרפות לכת עדי יהווה</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לראיון אישי</td>
                <td>3 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לשינוי מועד התייצבות בל"ג</td>
                <td>שבוע</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה להכרת המלש"ב כמצטיין/ספורטאי פעיל</td>
                <td>חודשיים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשה לדח"ג לשירות ביטחון לבעלי אזרחות נוספת: שוויצרית, ספרדית</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשות לשינוי רישום תאריך הלידה במשרד הפנים</td>
                <td>6 חודשים</td>
            </tr>
            <tr>
                <td class="table-bold">בקשת שוהה בחו"ל להסדרת מעמד</td>
                <td>חודש</td>
            </tr>
            <tr>
                <td class="table-bold">בקשות מלש"בים בנים לפטור מטעמים שונים</td>
                <td>6 חודשים</td>
            </tr>
        </table>
        <p class="download-btn-container">
            <a class="download-btn" :href="`${publicPath}mediaForDownload/section13chart.png`" download='section13chart.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד תרשים
            </a>
        </p>

        <InteractiveExample>
        </InteractiveExample>

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
    name: 'Chapter2Page6',
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