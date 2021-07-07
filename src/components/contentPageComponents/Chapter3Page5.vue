<template>
    <div class="page-content chapter3-page5">
        <div class="content-title">התייצבות משתמט</div>
        <p>כיצד יש לנהוג כאשר משתמט מתייצב בלשכה או נתפס על ידי מ"צ? בתרשים הבא תמצאו את כל התשובות.</p>
        <p>אבל רק רגע! לפני שנגיע לתרשים, יש מספר הנחיות חשובות:</p>
        
        <ol>
            <li>ככלל, בעת טיפול במשתמט פרקליטותי יש לקבל את אישור הפרקליטות.</li>
            <li>ככלל, יש לסיים הליכי הצו הראשון עם כל משתמט שמתייצב אם נדרש בכך, משתמט שמציג מסמכים רפואיים/נפשיים יובאו בפני רופא/קב"ן.</li>
            <li>על הלשכה לבחון האם המשתמט כשיר לגיוס ולמעצר לפי המידע שיש בידם או אם הציג מסמכים רפואיים/ נפשיים לאחר בחינתם ולפעול בהתאם לנוהל משתמטים, שכן אם כשיר לגיוס ומעצר עליו לתת את הדין על ההשתמטות.</li>
        </ol>

        <p class="graph-title">תרשים התייצבות משתמט</p>

        <p class="download-btn-container">
            <a class="download-btn" :href="`${publicPath}mediaForDownload/section13chart.png`" download='section13chart.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד תרשים
            </a>
        </p>

        <GraphNavigation>
        </GraphNavigation>

        <p class="graph-title">תרשים במידה ומשתמטת מציגה מסמכי היריון/אם לילד/נישואין</p>

        <p class="download-btn-container">
            <a class="download-btn" :href="`${publicPath}mediaForDownload/section13chart.png`" download='section13chart.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד תרשים
            </a>
        </p>

    </div>
</template>

<script>
import GraphNavigation from './GraphNavigation.vue'

export default {
    name: 'Chapter3Page5',
    components: { 
        GraphNavigation
    },
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

.graph-title {
    font-weight: bold;
    text-align: center;
}

</style>