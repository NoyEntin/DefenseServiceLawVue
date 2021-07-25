<template>
    <div class="page-content chapter2-page6">
        <div class="content-title">קודם כל – מי הוא משתמט?</div>
        <p>
            משתמט הינו מלש"ב אשר לא התייצב לגיוסו ופוקד אישר להכריזו כמשתמט ונדרש למעצר. לפני שהתקבל אישור הפוקד מוגדר המלש"ב כמאחר גיוס (ללא אישור).
        </p>
        <p>
            היעד אליו מתגייס המלש"ב קובע כמה זמן יש ללשכה להכריזו כמשתמט אם לא התייצב ליום גיוסו. להלן טווחי הטיפול בהתאם ליעדים:
        </p>

        <table class="table">
            <tr>
                <th>יעד הגיוס של מאחר הגיוס</th>
                <th>זמן תקין להכרזה מיום הגיוס</th>
            </tr>
            <tr>
                <td class="table-bold">יעדי יח"ש</td>
                <td>עד 48 שעות</td>
            </tr>
            <tr>
                <td class="table-bold">צו 12 שאותר ונוצר עימו קשר/התייצב בלשכה בעבר</td>
                <td>עד 30 ימים</td>
            </tr>
            <tr>
                <td class="table-bold">צו 12 שלא אותר ומעולם לא התייצב בלשכה</td>
                <td>עד 45 ימים, בכפוף לאישור מפקד מיטב או סגן גיוס בלבד!</td>
            </tr>
            <tr>
                <td class="table-bold">יתר היעדים שאינם יח"ש או צווי 12</td>
                <td>עד 14 ימים</td>
            </tr>
        </table>

        <p class="download-btn-container">
            <a class="download-btn" :href="`${publicPath}mediaForDownload/defaulter-declaration-time.png`" download='defaulter-declaration-time.png'>
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
                תאריך אחרון לבקשת הפטור: 04.04.2020
            </div>
            <div class="example-content">
                <p>עדי הינה מלש"בית צו 12 שלא התייצבה כלל בלשכת הגיוס ולא אותרה טלפונית כלל.</p>
                <p>בתאריך 12.05.20 לא התייצבה למועד גיוסה כצו 12.</p>
                <p>על מנת להכריז אותה כמשתמטת, נידרש לבצע את כל הפעולות האפשריות על מנת לחתור עימה למגע ולהבהיר את מעמדה כמשתמטת, תוך גילוי רגישות מאחר ולא אותרה מעולם.</p>
                <p>לרשות הלשכה ישנם עד 45 ימים על מנת לנסות להשיגה (לרבות ביקור בית). בסיום תהליך האיתור, במידה ולא אותרה, תועבר לסגן מפקד מיטב לגיוס לאישור הכרזת השתמטות.</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chapter3Page1',
    props: {

    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    created() {
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>

</style>