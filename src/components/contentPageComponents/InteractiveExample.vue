<template>
    <div class="Interactive-example">
        דוגמה אינטרקטיבית

        <div class="example-container">
            <div class="example-help">
                לחצו על כל אחד מהשלבים על מנת לראות כיצד הוא משפיע על סעיף 20
            </div>
            <div class="change-to-text">
                <div>החלף לטקסט</div>
                <img src="../../media/graphics/calendar.svg" class="example-img"/>
            </div>
            <div class="example-header">
                סעיף 20: 1/1/2021
            </div>
            <div class="example-content">
                <p>
                דנה הינה מלש"בית  שנולדה בחו"ל והגיעה לארץ בגיל 19 בתאריך 1/1/20 וביצעה עליה ולכן קיבלה ממעד אזרחית בתאריך 1/7/20 כאשר היא בת 19 וחצי. מועד סעיף 20 שלה הינו שנתיים ממועד קבלת מעמד אזרחי כלומר תאריך העלייה ולכן יהיה 1/7/22.
                </p>
            </div>
            <div class="time-line-container">
                <div class="time-stamps-container">
                    <div class="time-stamp">
                        laksjdfaldkjfa;kjf
                    </div>
                    <div class="time-stamp">
                        laksjdfaldkjfa;kjf
                    </div>
                    <div class="time-stamp">
                        laksjdfaldkjfa;kjf
                    </div>
                    <div class="time-stamp">
                        laksjdfaldkjfa;kjf
                    </div>
                    <div class="time-stamp">
                        laksjdfaldkjfa;kjf
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'InteractiveExample',

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

      

    .example-help {
        border: var(--yellow) 0.5vmin solid;
        width: 55%;
        padding: 1%;
    }

    .change-to-text {
        width: 12%;
        position: absolute;
        right: 2%;
        top: -15%;
    }

    .example-img {
        width: 100%;
        height: 100%;
    }

    .example-container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-end;
    }

    .example-header {
        width: 100%;
        padding: 0%;
        text-align: center;
    }

    .time-line-container {
        background-color: cadetblue;
        width: 100%;
        height: 20vmax;
        max-height: 20vh;
    }

    .time-stamps-container {
        background-color: darkseagreen;
        width: 100%;
        height: 100%;
         max-width:100%;
  max-height:100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .time-stamp {
        background-color: lightseagreen;
        margin: 5%;
    }

</style>