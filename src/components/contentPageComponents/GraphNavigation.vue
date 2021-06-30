<template>
    <div class="graph-navigation">
        <div class="graph-progress"></div>
        <div class="graph-container">
            <div class="graph-help">
                <div>נווטו בתרשים בעצמכם!</div>
                <div>בחרו בכל שלב את האפשרות והתקדמו בתרשים.</div>
                <div>זכרו שתמיד אפשר לחזור אחורה.</div>
            </div>
            <div class="graph-main">
                <div class="graph-main-top">
                    <p class="graph-title">נוהל משתמטים</p>
                    <div class="restart-btn">אתחל</div>
                    <div class="back-btn">חזור</div>
                </div>
                <div class="graph-main-top-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 200 100">
                        <path d="M 0 0 L 200 0 L 100 100 L 0 0" fill="var(--red)"></path>
                    </svg>
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

        }
    },
    methods: {
    
    },
    computed: {

    },
}
</script>

<style scoped>

.graph-navigation {
    display: flex;
    flex-flow: row nowrap;
    width: 850px;
    box-sizing: border-box;
    max-width: 100%;
    height: 50vh;
}

.graph-progress {
    background-color: lightgray;
    height: 100%;
    width: 30%;
    margin-left: 2vmin;
}

.graph-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
    height: 100%;
    width: 100%;
}

.graph-help {
    border: var(--yellow) 3px solid;
    width: 70%;
}

.graph-main {
    border: var(--red) 2px solid;
    height: 100%;
    width: 100%;
    position: relative;
}

.graph-main-top {
    height: 12%;
    width: 100%;
    background-color: var(--red);
    text-align: center;
}

.graph-title {
    color: white;
    font-size: 1.5em;
    line-height: 1.5em;
    margin: 0;
}

.back-btn {
    position: absolute;
    color: var(--yellow);
    top: 1%;
    right: 1%;
    height: 8%;
    width: 8%;
    border: var(--yellow) 2px solid;
}

.restart-btn {
    position: absolute;
    color: var(--yellow);
    top: 1%;
    right: 11%;
    height: 8%;
    width: 8%;
    border: var(--yellow) 2px solid;
}

.graph-main-top-shape {
    width: 40%;
    height: 20%;
    position: relative;
    right: 30%;
}
</style>