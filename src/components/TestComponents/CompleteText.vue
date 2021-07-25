<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <div class="drag-drop-container">
            <div class="draggables-container"
            @drop="onDrop($event, 'start')"
            @dragenter.prevent
            @dragover.prevent
            >
                <div class="items"
                v-for="item in items" :key="item.id"
                @dragstart="startDrag($event, item, 'start')"
                @dragend="endDrag($event, item)"
                :draggable="!isFeedbackMode"
                >
                {{item.title}}
                </div>
            </div>
            <div class="droppables-container">
                <div v-for="dropZone in dropZones" :key="'dropZone'+dropZone.id" class="droppables-and-text-container">
                    <div v-html="currentQuestion.text[dropZone.id]" class="drop-in-text"></div>
                    <div class="drop-in"
                    :class="{'full': dropZone.item !== '',
                    'correct': isFeedbackMode && userAnswers[dropZone.id] === currentQuestion.rightAnswer[dropZone.id],
                    'incorrect': isFeedbackMode && userAnswers[dropZone.id] !== currentQuestion.rightAnswer[dropZone.id]}"
                    @drop="onDrop($event, dropZone)"
                    @dragenter.prevent
                    @dragover.prevent
                    >
                        <div>
                            <div :class="{'items': dropZone.item !== ''}"
                            @dragstart="startDrag($event, dropZone.item, dropZone)"
                            @dragend="endDrag($event, item)"
                            :draggable="!isFeedbackMode"
                            >
                                {{dropZone.item.title}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="droppables-container correct-answer-container" v-if="isFeedbackMode">
                <div v-for="dropZone in dropZones" :key="'dropZone'+dropZone.id" class="droppables-and-text-container">
                    <div v-html="currentQuestion.text[dropZone.id]" class="drop-in-text"></div>
                    <div class="drop-in correct">
                        <div>
                            <div v-if="isFeedbackMode"
                            class="items correctItems"
                            >
                                {{ showRightAnswer(dropZone) }}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CompleteText',
    data() {
        return {
            items: [],
            userAnswers: [],
            dropZones: [],
        }
    },
    props: {
        currentQuestion: {
            type: Object,
            required: true,
        },
        currentUserAnswer: {
            required: true,
        },
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
    },
    methods: {
        startDrag(event, item, dropZone) {
            event.target.style.opacity = '0.4';

            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemID', item.id);
            if(dropZone==='start')
                event.dataTransfer.setData('itemParent', dropZone);
            else
                event.dataTransfer.setData('itemParent', dropZone.id);
        },
        endDrag(event, item){
            event.target.style.opacity = '1';
        },
        onDrop(event, dropZone) {
            var itemID = event.dataTransfer.getData('itemID');
            var itemParentID = event.dataTransfer.getData('itemParent');
            var item = -1;
            if(dropZone !== 'start') {
                if (itemParentID !== 'start') {
                    item = this.dropZones[itemParentID].item;
                    this.dropZones[itemParentID].item = '';
                    this.userAnswers[itemParentID] = -1;
                } else {
                    for (var i = 0; i < this.items.length; i++) {
                        if (this.items[i].id === Number(itemID)) {
                            item = this.items.splice(i, 1)[0];
                        }
                    }
                }
                if(dropZone.item !== '') {
                    this.items.push(dropZone.item);
                }
                dropZone.item = item;
                this.userAnswers[dropZone.id] = Number(itemID);
            } else if (itemParentID !== 'start') {
                item = this.dropZones[itemParentID].item;
                this.dropZones[itemParentID].item = '';
                this.userAnswers[itemParentID] = -1;
                this.items.push(item);
            }
            this.$emit('answer-clicked', this.userAnswers);
        },
        isUserCorrect(dropZone) {
            return this.currentQuestion.rightAnswer[dropZone.id] === this.userAnswers[dropZone.id]
        },
        showRightAnswer(dropZone) {
            var rightAnswerIndex = this.currentQuestion.rightAnswer[dropZone.id]
            return this.currentQuestion.answers[rightAnswerIndex]
        }
    },
    created(){
        var isUserAnswerEmpty = this.currentUserAnswer === -1;
        if(!isUserAnswerEmpty){
            this.userAnswers = this.currentUserAnswer;
        }

        for(var i = 0; i< this.currentQuestion.options.length; i++) {
            this.dropZones.push({'id': i, 'title': this.currentQuestion.options[i], 'item': ''});
            this.items.push({'id': i, 'title': this.currentQuestion.answers[i]});
            if(isUserAnswerEmpty){
                this.userAnswers.push(-1);
            }
        }

        for(var i = 0; i< this.userAnswers.length; i++) {
            if(this.userAnswers[i]!==-1){
                var answerIndexInItems = this.items.findIndex(obj => { return obj.id === this.userAnswers[i] });
                this.dropZones[i].item = this.items.splice(answerIndexInItems, 1)[0];
            }
        }
    }
}
</script>

<style scoped>

.drag-drop-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row nowrap;
}

.draggables-container {
    width: 30%;
    min-height: 100%;
    background-color: rgb(242, 242, 242);
    margin: 2%;
}

.droppables-container {
    width: 100%;
    margin: 2%;
    text-align: right;
}

.droppables-and-text-container {
    display: inline;
}

.drop-in {
    width: 5em;
    background-color: rgb(242, 242, 242);
    margin: 0% 1%;
    display: inline-block;
    vertical-align: middle;
    height: 2em;
}

.drop-in-text {
    display: inline-block;
    height: 3em;
}

.full {
    background-color: var(--lighten-blue);
}

.correct {
    background-color: rgba(32, 178, 105, 0.7);
}

.incorrect {
    background-color: rgba(231, 29, 54, 0.7);
}

.draggables-container .items {
    margin: 6%;
    width: 84%;
            line-height: normal;

}

.items {
    background-color: rgb(242, 242, 242);
    padding: 0% 2%;
    background-color: var(--yellow);
    line-height: 1.5em;
    margin: 0.25em auto;
    cursor: grab;
    width: fit-content;

}

.drag-drop-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
}

.correctItems {
    background-color: rgb(32, 178, 105);
}

.correct-answer-container{
    margin-top: 5%;
    padding: 2% 2% 0% 2%;
    box-sizing: border-box;
    background-color: rgb(213, 247, 229);
}
</style>