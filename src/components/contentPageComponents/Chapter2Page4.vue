<template>
    <div class="page-content chapter2-page4">
        <div class="content-title">חישוב הארכת סעיף 20</div>
        <p>
            כעת נפרט- 
            <b> איך מחשבים כל תקופה בלתי נמנית והארכת סעיף 20?</b>
        </p>

        <table class="table">
            <tr>
                <th>תקופה בלתי נמנית</th>
                <th>אופן חישוב ההארכה</th>
            </tr>
            <!-- <tr>
                <td class="table-bold table-center">דחיית גיוס עקב בקשת המלש"ב</td>
                <td>ניתן להאריך 12 חודשים מתום תקופת הדחייה או 24 חודשים מגיל יוצא צבא (18 עברי), המאוחר מבניהם.</td>
            </tr> -->
            <tr>
                <td class="table-bold table-center">אי שת"פ</td>
                <td>
                    <div>הארכה ממועד הזימון הראשון אליו לא התייצב ועד למועד הראשון שאליו התייצב/שלח מסמכים רלוונטיים/מעבר לפקודת מעצר/מועד צו גיוס ללא פקודת מעצר/מועד כניסה לשנה שלישית במניין סעיף 20.</div>
                    <div>במידה וישנו מרווח לא סביר בין זימון אחד להבא, בהתאם לסוג הזימון, לא תוארך התקופה שבין הזימונים (לדוגמא אם זימנו מלש"ב לצו ראשון רק חודשיים לאחר שלא התייצב, לא נאריך סעיף 20 על תקופה זו, שכן היא ארוכה באופן שאינו סביר).</div>
                     <div>ניתן להאריך רק כאשר המלש"ב לא התייצב לזימונים מחייבים. זימונים מחייבים הם:
                        <br>
                        זימון לצו ראשון
                        <br>
                        רפואי וברה"ן
                    </div>
                    <div>
                        ניתן להאריך גם במידה והמלש"ב התייצב אך סרב להיבדק.
                    </div>
                </td>
            </tr>
            <tr>
                <td class="table-bold table-center">אי כשירות רפואית</td>
                <td>הארכה כמשך תקופת השהייה בפרופיל 24 על פי קביעת גורמי הרפואה (חודשי זמניות בפרופיל 24, בעת שהיה בפרופיל 24 סעיף 20 עוצר ולא נמנה)</td>
            </tr>
            <tr>
                <td class="table-bold table-center">תקופת שהות בחו"ל למעלה מחודשיים</td>
                <td>תקופות שהייה בחו"ל מעל לחודשיים בכפוף לכניסות ויציאות מהארץ, יספר החל מגיל 16.5 עברי. מיועד למלש"בים בחו"ל ללא אישור (בני מהגרים יוארכו בהתאם לסעיף דח"ג)</td>
            </tr>
            <tr>
                <td class="table-bold table-center">תקופה הקבועה בפקודות הצבא שחלפה עקב בקשתו של מלש"ב</td>
                <td>תקופות הקבועות ב<a href="theLaw.html#mg0120" target="_blank">מ"ג 01-20</a>. למשל, בקשה להקדמת/דחיית גיוס. תקופות אלו יפורטו בהמשך</td>
            </tr>
            <tr>
                <td class="table-bold table-center">תקופה בה היה מלש"ב בפטור שהושג במרמה (למעט פטור לפי סעיף 40)</td>
                <td>כל התקופה בה שהה בפטור</td>
            </tr>
            <!-- <tr>
                <td class="table-bold table-center">שנה מתום לימודים- שנה מתל"ם</td>
                <td>שנה מתום לימודים לפי חתימה על טופס סיום אימות.</td>
            </tr> -->
            <!-- <tr>
                <td class="table-bold table-center">קבלת מעמד אזרחי</td>
                <td>שנתיים מתאריך עלייה או מתאריך קבלת מעמד אזרחי.</td>
            </tr> -->
            <!-- <tr>
                <td class="table-bold table-center">שנה מפתיחת רשומה</td>
                <td>שנה מתאריך בקשה אישית לפתיחת רשומה (יש להקפיד על תאריך הבקשה שתצוין וממועד זה שנה)</td>
            </tr> -->
            <!-- <tr>
                <td class="table-bold table-center">סיום דחיית גיוס לאוכלוסיית בני"ש</td>
                <td>שנתיים מחתימת דיחוי אחרון.</td>
            </tr> -->
            
            
        </table>
                <p class="download-btn-container">
            <span class="chart-tip"><b>טיפ!</b> אם תורידו את התרשים למחשב, תוכלו להיעזר בו במהלך המבחן</span>
            <a class="download-btn" :href="`${publicPath}mediaForDownload/calculate-section-20.png`" download='calculate-section-20.png'>
                <img src="../../media/graphics/download.svg"/>
                הורד טבלה
            </a>
        </p>

        <InteractiveExample :exampleNumber="0">
        </InteractiveExample>

        <InteractiveExample :exampleNumber="1">
        </InteractiveExample>


    </div>
</template>

<script>

import InteractiveExample from './InteractiveExample.vue'

export default {
    components: { 
        InteractiveExample
    },
    name: 'Chapter2Page4',
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
    table a {
        padding: 0;
    }
</style>