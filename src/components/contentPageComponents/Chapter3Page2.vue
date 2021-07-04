<template>
    <div class="page-content chapter3-page2">
        <div class="content-title">לפני ההכרזה</div>
        <p>
            בטווח הזמנים טרם הכרזת המלש"ב כמשתמט, ישנם מספר הליכים מחייבים אותם נדרשת לשכת הגיוס לעשות.
        </p>
        <p><b>ראשית, נבצע את 5 הפעולות הבאות:</b></p>
        <AccordionContainer>
            <AccordionItem icon-name="contact.svg">
              <template v-slot:accordion-trigger>
                <h3>צור קשר</h3>
              </template>
              <template v-slot:accordion-content>
                <p>
                    יש לנסות ליצור קשר עם המיועד לשירות ביטחון/בני משפחתו על מנת לוודא שהוא מודע למועד הגיוס שנקבע לו, וכן להשלכות הנוגעות בכך שלא התייצב לגיוסו ועתיד להיות משתמט.
                </p>
              </template>
            </AccordionItem>

            <AccordionItem icon-name="travelling.svg">
              <template v-slot:accordion-trigger>
                <h3>בדוק שהייה בארץ</h3>
              </template>
              <template v-slot:accordion-content>
                <p>
                    יש לבדוק ביקורת גבולות בארץ – בדיקה במסוף משרד הפנים שהמיועד לשירות ביטחון שוהה בארץ.
                </p>
                <p>
                    במידה והמיועד לשירות ביטחון שוהה בחו"ל – ייבדק כי הצו להתייצבות לגיוס נשלח כאשר היה המלש"ב הארץ (צו גיוס ראשוני/עדכון), במקרה זה יוכרז המיועד לשירות ביטחון כמשתמט בחו"ל. אם נשלח הצו כאשר המלש"ב היה בחו"ל יטופל לפי מדיניות ונהלי חו"ל.
                </p>
              </template>
            </AccordionItem>

            <AccordionItem icon-name="cardiogram.svg">
              <template v-slot:accordion-trigger>
                <h3>וודא כשירות</h3>
              </template>
              <template v-slot:accordion-content>
                <p>  
                    כשירות לגיוס בהתאם למידע הקיים ברשותנו – במידה וישנו מידע רפואי אודות המלש"ב, יבחן המידע כי אין בו מניעה להכרזה כמשתמט.
                </p>
              </template>
            </AccordionItem>

            <AccordionItem icon-name="personal-information.svg">
              <template v-slot:accordion-trigger>
                <h3>בדוק מידע רגיש</h3>
              </template>
              <template v-slot:accordion-content>
                <p>
                    מידע רגיש הקיים בלשכת הגיוס – לדוגמת בן למשפחה שכולה, השתייכות לאוכלוסיית ביטוח לאומי, לצורך בחינה האם המלש"ב מחויב בשירות.
                </p>
              </template>
            </AccordionItem>

            <AccordionItem icon-name="check.svg">
              <template v-slot:accordion-trigger>
                <h3>וודא תקינות</h3>
              </template>
              <template v-slot:accordion-content>
                <p>
                    תקינות ההכרזה – בדיקה כי צו הגיוס נשלח לכתובת עדכנית בהתאם למשרד הפנים/עדכון המלש"ב, התראה של 45 ימים בשליחת הצו והימצאות תע"צ/העתק צו 12 שנשלח בדואר רשום.
                </p>
              </template>
            </AccordionItem>
        </AccordionContainer>
        <div class="example-container">
            <div class="example-title">
                <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                    <path d="M 0 50 L 60 0 L 300 0 L 300 100 L 60 100 L 0 50" fill="var(--yellow)"></path>
                </svg>
                <p>לדוגמא:</p>
            </div>
            <img src="../../media/graphics/calendar.svg" class="example-icon"/>
            <div class="example-header">
                &#10084;
            </div>
            <div class="example-content">
                <p>
                    שני הייתה מיוצבת לגיוס לתאריך 1.6.2020 ולא התייצבה.
                </p>
                <p>
                    יום לפני הגיוס שלחה מסמך רפואי אשר הובא בפני רופא הלשכה אשר קבע כי הינה כשירה לגיוס ועליה להתייצב, תשובה זו נמסרה לה טלפונית אך ביום הגיוס לא התייצבה.
                </p>
                <p>
                    במהלך הטיפול בהכרזתה כמשתמטת בוצעה שיחה נוספת עימה והובהר מעמדה, אז שלחה מסמך רפואי נוסף. מהסמך הובא בפני הרופא אשר קבע הפעם כי איננה כשירה לגיוס ב-3 ימים הקרובים ויש לאפשר לה כמאחרת גיוס בתאריך 4.6.2020.
                </p>
                <p>
                    מדור גיוס יזין למלש"בית פעולת מאחר גיוס והיא תעודכן טלפונית על מועד גיוסה העדכני.
                </p>
            </div>
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
                &#10084;
            </div>
            <div class="example-content">
                <p>
                    רז היה מיוצב לגיוס לתאריך 1.1.2021 ולא התייצב למועד גיוסו. ביום הגיוס בוצעו מס' ניסיונות לאתרו טלפונית ללא הצלחה.
                </p>
                <p>
                    בעת בדיקת תקינות התיק להכרזת השתמטות הוציאה מש"קית משתמטים ב"ג ממסוף משה"פ והבחינה כי רז שוהה בחו"ל. צ"ג נשלח לרז באופן תקין ובהתראה של 45 ימים בתאריך 1.10.20 אך עפ"י ב"ג רז יצא לחו"ל בתאריך 24.9.20, כלומר כשבוע לפני שליחת צ"ג אליו בדואר.
                </p>
                <p>
                    לפיכך, רז לא יוכרז כמשתמט ויועבר לסטטוס שוהה בחו"ל שלא ברשות.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// import {
//   VueCollapsiblePanelGroup,
//   VueCollapsiblePanel,
// } from '@dafcoe/vue-collapsible-panel'
// import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import AccordionContainer from "./../accordionComponents/AccordionContainer"
import AccordionItem from "./../accordionComponents/AccordionItem"

export default {
    name: 'Chapter3Page2',
    components: {
        AccordionContainer,
        AccordionItem
    },
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
}
</script>

<style scoped>
    h3 {
        margin: 0;
        line-height: 6vmin;
    }

    .accordion-container {
        width: 80%;
        margin: 0% 10%;
    }

    ::v-deep .accordion-content {
        margin: 1em;
    }

    .accordion-item {
        border-width: 0px 3px 3px 3px;
        border-style: solid;
        border-color: var(--blue);
    }
</style>