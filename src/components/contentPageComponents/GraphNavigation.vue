<template>
    <div class="graph-navigation">
        <div class="graph-progress-container">
            <div class="graph-progress" v-for="selectedChoice in selectedChoices" :key="selectedChoice.name">
                <div class="list-down-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 200 100">
                        <path d="M 0 0 L 100 30 L 200 0 L 200 70 L 100 100 L 0 70 L 0 0" fill="var(--lighten-blue)"></path>
                    </svg>
                </div>
                <div class="graph-progress-text">{{selectedChoice.value}}</div>
            </div>
        </div>
        <div class="graph-container">
            <div class="graph-help">
                <div class="graph-help-mark">?</div>
                <div>
                בכל שלב, בחרו באחת האפשרויות כדי להתקדם.<br>
                לא לשכוח- תמיד אפשר לחזור אחורה.</div>
                <!-- <div>{{choices[0].value}}</div> -->
            </div>
            <div class="graph-main">
                <div class="graph-main-top">
                    <!-- <p class="graph-title">{{currentChoice.value}}</p> -->
                    <div class="back-btn" @click="clickedBack">
                        <img src="./../../media/graphics/back.svg">
                        <div>חזור</div>
                    </div>
                    <div class="restart-btn" @click="clickedRestart">
                        <img src="./../../media/graphics/restart.svg">
                        <div>אתחל</div>
                    </div>
                    {{currentChoice.value}}
                </div>
                <div class="graph-main-top-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 200 100">
                        <path d="M 0 0 L 200 0 L 100 100 L 0 0" fill="var(--red)"></path>
                    </svg>
                </div>
                <div class="graph-choice-container">
                    <div class="graph-choice" v-for="choice in choices" :key="choice.name" @click="ClickedChoice(choice)" :class="{'not-btn-choice': isItEnd}">
                        {{choice.value}}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'GraphNavigation',

    data() {
        return {
            selectedChoices: [],
            currentChoice: {},
        }
    },
    methods: {
        ClickedChoice(choice) {
            if (choice.children[0] !== "end") {
                this.currentChoice = choice;
                this.selectedChoices.push(choice);
            }
        },
        clickedBack(event) {
            if (this.currentChoice.name !== "a0") {
                this.selectedChoices.pop();
                this.currentChoice = this.selectedChoices[this.selectedChoices.length - 1];
            }
        },
        clickedRestart(event) {
            this.selectedChoices = [this.a0];
            this.currentChoice = this.a0;
        }
    },
    created() {
        this.currentChoice = this.a0;
        this.selectedChoices.push(this.a0)
    },
    computed: {
        choices(){return this.currentChoice.children},
        isItEnd(){return this.currentChoice.children[0].children[0] === "end"},

        a0() { return {
            "name": "a0",
            "value": "נוהל משתמטים",
            "children": [this.a1]
        }},
        a1() { return {
            "name": "a1",
            "value": "התייצבות משתמט",
            "children": [this.b1, this.b2]
        }},
        b1() { return {
            "name": "b1",
            "value": "במ\"צ",
            "children": [this.c1, this.c2]
        }},
        b2() { return {
            "name": "b2",
            "value": "בלשכת הגיוס",
            "children": [this.c3]
        }},
        c1() { return {
            "name": "c1",
            "value": "משתמט פרקליטותי",
            "children": [this.d1]
        }},
        c2() { return {
            "name": "c2",
            "value": "משתמט רגיל",
            "children": [this.d2]
        }},
        c3() { return {
            "name": "c3",
            "value": "מעבר ראיון לאישור פוקד",
            "children": [this.d3, this.d4]
        }},
        d1() { return {
            "name": "d1",
            "value": "ייעצר, במידה וחסר פרופיל, יבצע את הוועדה לקביעת פרופיל במיטב במסגרת 30 הימים הנדרשים לכך",
            "children": ["end"]
        }},
        d2() { return {
            "name": "d2",
            "value": "יישלח ללשכה",
            "children": [this.e1, this.e2, this.e3]
        }},
        d3() { return {
            "name": "d3",
            "value": "משתמט רגיל",
            "children": [this.e1, this.e2, this.e3]
        }},
        d4() { return {
            "name": "d4",
            "value": "משתמט פרקליטותי",
            "children": [this.e4, this.e5, this.e6]
        }},
        e1() { return {
            "name": "e1",
            "value": "ללא נתוני איכות",
            "children": [this.f1, this.f2]
        }},
        e2() { return {
            "name": "e2",
            "value": "בעל פרופיל",
            "children": [this.f3]
        }},
        e3() { return {
            "name": "e3",
            "value": "חסר פרופיל",
            "children": [this.f4]
        }},
        e4() { return {
            "name": "e4",
            "value": "ללא נתוני איכות",
            "children": [this.f6]
        }},
        e5() { return {
            "name": "e5",
            "value": "בעל פרופיל",
            "children": [this.f7]
        }},
        e6() { return {
            "name": "e6",
            "value": "חסר פרופיל",
            "children": [this.f8]
        }},
        f1() { return {
            "name": "f1",
            "value": "ישלים בלשכה את ההליכים",
            "children": [this.h1]
        }},
        f2() { return {
            "name": "f2",
            "value": "ללא הצגת מסמכים רפואיים/ברה\"בים",
            "children": [this.h1]
        }},
        f3() { return {
            "name": "f3",
            "value": "הצגת מסמכים רפואיים/נפשיים",
            "children": [this.f4]
        }},
        f4() { return {
            "name": "f4",
            "value": "בדיקה רפואית וברה\"נית במידת הצורך",
            "children": [this.g1, this.g2, this.g3, this.g4]
        }},
        f5() { return {
            "name": "f5",
            "value": "ישלים בלשכה את ההליכים בכפוף לאישור ובתיאום מול הפרקליטות",
            "children": ["end"]
        }},
        f6() { return {
            "name": "f6",
            "value": "ללא הצגת מסמכים רפואיים/ברה\"נים",
            "children": [this.h3]
        }},
        f7() { return {
            "name": "f7",
            "value": "הצגת מסמכים רפואיים/נפשיים",
            "children": [this.f8]
        }},
        f8() { return {
            "name": "f8",
            "value": "בדיקה רפואית וברה\"נית במידת הצורך",
            "children": [this.g5, this.g6, this.g7, this.g8]
        }},
        g1() { return {
            "name": "g1",
            "value": "כשיר למעצר ולגיוס",
            "children": [this.h1]
        }},
        g2() { return {
            "name": "g2",
            "value": "כשיר למעצר ולא לגיוס",
            "children": [this.h1]
        }},
        g3() { return {
            "name": "g3",
            "value": "כשיר לגיוס ולא למעצר",
            "children": [this.h1]
        }},
        g4() { return {
            "name": "g4",
            "value": "לא כשיר לגיוס ולא למעצר",
            "children": [this.h2]
        }},
        g5() { return {
            "name": "g5",
            "value": "כשיר למעצר ולגיוס",
            "children": [this.h3]
        }},
        g6() { return {
            "name": "g6",
            "value": "כשיר למעצר ולא לגיוס",
            "children": [this.h3]
        }},
        g7() { return {
            "name": "g7",
            "value": "כשיר לגיוס ולא למעצר",
            "children": [this.h4]
        }},
        g8() { return {
            "name": "g8",
            "value": "לא כשיר לגיוס ולא למעצר",
            "children": [this.h2]
        }},
        h1() { return {
            "name": "h1",
            "value": "מעצר מיטב בתיאום מול תא חריגים",
            "children": [this.i1]
        }},
        h2() { return {
            "name": "h2",
            "value": "פטור בסמכות פוקד בלשכה",
            "children": ["end"]
        }},
        h3() { return {
            "name": "h3",
            "value": "מ\"צ",
            "children": [this.i2]
        }},
        h4() { return {
            "name": "h4",
            "value": "שר\"ח בתיאום פרקליטות",
            "children": ["end"]
        }},
        i1() { return {
            "name": "i1",
            "value": "אם לא ניתן לסיים את ההליכים, יש לוודא השלמת ההליכים תוך 72 שעות וזאת לאחר החתמתו על הצהרה בפני פוקד ובחתימת פוקד שהוא מתחייב להתייצב להשלמת ההליכים כפי שנדרש וזאת עד 72 שעות. במידה ולא מתאפשר להשלימו את ההליכים יתואם פרטנית מול תא חריגים הגעתו ויושלמו ההליכים בשר\"ח",
            "children": ["end"]
        }},
        i2() { return {
            "name": "i2",
            "value": "ייעצר ע\"י מ\"צ וימשיך טופל ע\"י הפרקליטות להגשת כתב אישום ולהעמדה לדין. בכפוף וצמוד להנחיות הפרקליטות",
            "children": ["end"]
        }}

    },
}
</script>

<style scoped>

.graph-navigation {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
}

.graph-progress-container {
    background-color: rgb(242, 242, 242);
    width: 30%;
    margin-left: 2vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
}

.graph-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    width: 100%;
}

.graph-help {
    border: var(--yellow) 0.5vmin solid;
    width: 70%;
    display: flex;
    position: relative;
    padding: 1%;
}

.graph-help div {
    padding: 2%;
    box-sizing: border-box;
}

/*.graph-help {
    border: var(--yellow) 3px solid;
    width: 70%;
}*/

.graph-help-mark {
    width: 25%;
    font-size: 7vmin;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: var(--yellow);
    margin-left: 3%;
}

.graph-main {
    border: var(--red) 2px solid;
    height: 40vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-flow: nowrap column;
}

.graph-main-top {
    width: 60%;
    background-color: var(--red);
    text-align: center;
    color: white;
    height: fit-content;
    padding: 1% 20%;
}

.graph-title {
    color: white;
    font-size: 1.2em;
    line-height: 1.8em;
    margin: 0;
}

.back-btn {
    position: absolute;
    color: var(--yellow);
    top: 1%;
    right: 11%;
    height: 8%;
    width: 8%;
    /* border: var(--yellow) 2px solid; */
    cursor: pointer;
}

.restart-btn {
    position: absolute;
    color: var(--yellow);
    top: 1%;
    right: 1%;
    height: 8%;
    width: 8%;
    /* border: var(--yellow) 2px solid; */
    cursor: pointer;
}

.graph-main-top-shape {
    width: 50%;
    height: 20%;
    margin: 0;
}

.graph-choice-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 60%;
}

.graph-choice {
    background-color: var(--yellow);
    padding: 3% 5%;
    cursor: pointer;
}

.graph-choice:hover {
    background-color: var(--lighten-yellow);
}

.not-btn-choice {
    background-color: white;
    font-size: 1.4em;
    cursor: auto;
}
.not-btn-choice:hover {
    background-color: white;
}

.graph-progress {
    margin: -5% 5%;
    position: relative;
    height: fit-content;
}

.list-down-shape {
    height: fit-content;
}

.graph-progress-text {
    top: 32%;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    text-align: center;
    height: 50%;
    width: 80%;
    font-size: 0.9em;
    line-height: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.restart-btn div,
.back-btn div {
    font-size: 0.8em;
    margin: 0%;
    position: relative;
    top: -50%;
}

.restart-btn img,
.back-btn img {
    height: 60%;
    width: 80%;
    margin: 0%;
    transition: ease-in 0.1s;
}

.restart-btn:hover img {
    transform: rotateZ(50deg);
}

.back-btn:hover img{
    transform: rotateZ(150deg);
}

.back-btn img {
    transform: rotateZ(180deg);
}
</style>