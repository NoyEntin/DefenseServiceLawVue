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
        <img class="graphDefaulters" src="../../media/graphics/graphDefaulters1.png">
                <p class="download-btn-container">
            <span class="chart-tip"><b>טיפ!</b> אם תורידו את התרשים למחשב, תוכלו להיעזר בו במהלך המבחן</span>
            <a class="download-btn" :href="`${publicPath}mediaForDownload/graphDefaulters1.png`" download='graphDefaulters1.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד תרשים
            </a>
        </p>

        <p class="graph-title">נווטו בתרשים בעצמכם!</p>

        <GraphNavigation>
        </GraphNavigation>

        <p class="graph-title">תרשים במידה ומשתמטת מציגה מסמכי היריון/אם לילד/נישואין</p>
        <img class="graphDefaulters" src="../../media/graphics/graphDefaulters2.png">
                <p class="download-btn-container">
            <span class="chart-tip"><b>טיפ!</b> אם תורידו את התרשים למחשב, תוכלו להיעזר בו במהלך המבחן</span>
            <a class="download-btn" :href="`${publicPath}mediaForDownload/graphDefaulters2.png`" download='graphDefaulters2.png'>
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
            publicPath: process.env.BASE_URL
        }
    },
    created() {
        this.$store.commit('updateViewedPages');
    }
}
</script>

<style scoped>

.center-p {
    text-align: center;
}

.graph-title {
    font-weight: bold;
    text-align: center;
}

.graphDefaulters {
    height: 100%;
    width: 100%;
}
</style>