<template>
    <div class="test-form">
        <p class="form-title">לפני שנתחיל ספרו לנו על עצמכם</p>
        <span class="form-item">
            <div class="list-item">
                <div class="list-number"><img src=".\..\media\graphics\id-card.svg"/></div>
                <div class="list-text">שם פרטי</div>
                <div class="list-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--blue)"></path>
                    </svg>
                </div>
            </div>
            <input v-model="userInfo.firstName" placeholder="שם פרטי">
            <p :class="{'invalid-message-show': !isFirstNameValid && userInfo.firstName.length > 0}" class="invalid-message">על השם להכיל אותיות עבריות בלבד</p>
        </span>
        <span class="form-item">
            <div class="list-item">
                <div class="list-number"><img src=".\..\media\graphics\id-card.svg"/></div>
                <div class="list-text">שם משפחה</div>
                <div class="list-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--blue)"></path>
                    </svg>
                </div>
            </div>
            <input v-model="userInfo.lastName" placeholder="שם משפחה">
            <p :class="{'invalid-message-show': !isLastNameValid && userInfo.lastName.length > 0}" class="invalid-message">על השם להכיל אותיות עבריות בלבד</p>
        </span>
        <span class="form-item">
            <div class="list-item">
                <div class="list-number"><img src=".\..\media\graphics\dog-tag.svg" class="dog-tag"/></div>
                <div class="list-text">מספר אישי</div>
                <div class="list-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--blue)"></path>
                    </svg>
                </div>
            </div>
            <input  v-model="userInfo.personalNumber" placeholder="מספר אישי">
            <p :class="{'invalid-message-show': !isPersonalNumberValid  && userInfo.personalNumber.length > 0}" class="invalid-message">על המספר להכיל 7 ספרות, ללא אותיות</p>
        </span>
        <span class="form-item">
            <div class="list-item">
                <div class="list-number"><img src=".\..\media\graphics\office-building.svg"/></div>
                <div class="list-text">ענף/לשכה</div>
                <div class="list-shape">
                    <svg preserveAspectRatio="none" viewBox="0 0 300 100">
                        <path d="M 0 50 L 100 0 L 300 0 L 300 100 L 100 100 L 0 50" fill="var(--blue)"></path>
                    </svg>
                </div>
            </div>
            <select v-model="userInfo.branch">
                <option disabled value="">ענף\לשכה</option>
                <option>גיוס</option>
                <option>מעוף</option>
                <option>סדיר</option>
                <option>קו"ל</option>
                <option>שירות</option>
                <option>ל"ג באר שבע</option>
                <option>ל"ג חיפה</option>
                <option>ל"ג טבריה</option>
                <option>ל"ג ירושלים</option>
                <option>ל"ג תל השומר</option>
            </select>
        </span>
    </div>
</template>

<script>

export default {
    name: 'TestForm',
    props: {

    },
    data() {
        return {
            userInfo: {
                'firstName': '',
                'lastName': '',
                'personalNumber': '',
                'branch': ''
            }
        }
    },
    computed: {
        isFirstNameValid() {
            return /^[א-ת]+$/.test(this.userInfo.firstName)
        },
        isLastNameValid() {
            return /^[א-ת]+$/.test(this.userInfo.lastName)
        },
        isPersonalNumberValid() {
            return this.userInfo.personalNumber.length === 7
        }
    },
    methods: {
        validate(){
            var obj= this.userInfo;
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if(obj[prop] === '')
                        return false
                }
            }
            return this.isFirstNameValid && this.isLastNameValid && this.isPersonalNumberValid
        }
    },
}
</script>

<style scoped>
.form-title {
    width: 100%;
    text-align: center;
    font-size: 1.25em;
}


.test-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
}

.form-item {
    width: 30%;
    margin: 5%;
    font-size: 1em;
}

.form-item input, select{
    margin-right: 1.8em;
    font-size: 1em;
    font-family: heebo;
    text-align: center;
    width: 100%;
}

.form-title {
    width: 100%;
    text-align: center;
    font-size: 1.25em;
}

.list-item {
    margin-bottom: 0em;
}

.list-text {
    margin-right: -1.1em;
    text-indent: 2.2em;
}

.list-number {
    right: 0;
    display: flex;
    justify-content: center
}

.list-number img {
    width: 75%;
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7));
    filter: drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7));
}

.list-item .dog-tag {
    width: auto;
    margin-top: 5%;
    margin-left: 25%;
    height: 100%;
}

.invalid-message {
    color: red;
    font-size: 0.9em;
    margin: 1%;
    width: calc(100% + 1.8em);
    opacity: 0;
}

.invalid-message-show {
    opacity: 1;
}
</style>