<template>
    <div>
        <p v-html="temporaryCurrentQuestion.question"></p>
        <div class="drag-drop-container">
            <div class="draggables"
            @drop="onDrop($event, 'start')"
            @dragenter.prevent
            @dragover.prevent
            >
                <div class="items start-items-box"
                v-for="item in items" :key="item.id"
                @dragstart="startDrag($event, item, 'start')"
                draggable="true"
                >
                {{item.title}}
                </div>
            </div>
            <div class="droppables">
                <div class="drop-in"
                v-for="dropZone in dropZones" :key="'dropZone'+dropZone.id"
                @drop="onDrop($event, dropZone)"
                @dragenter.prevent
                @dragover.prevent
                >
                    {{dropZone.title}}
                    <div class="items"
                    @dragstart="startDrag($event, dropZone.item, dropZone)"
                    draggable="true"
                    >
                    {{dropZone.item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {ref} from 'vue'
export default {
    name: 'DragChoice',
    data() {
        return {
            // items: [
            //     {id: 0, title: 'Item A'},
            //     {id: 1, title: 'Item B'},
            //     {id: 2, title: 'Item C'},
            //     {id: 3, title: 'Item D'}
            // ],
            items: [],
            // userAnswers: [],
            dropZones: [],
            // dropZones: [
            //     {id: 0, title: 'Item B', item: ''},
            //     {id: 1, title: 'Item C', item: ''},
            //     {id: 2, title: 'Item A', item: ''},
            //     {id: 3, title: 'Item D', item: ''}
            // ],
            temporaryCurrentQuestion: this.$store.state.allTestQuestions[47][0],
        }
    },
    props: {
        currentQuestion: {
            type: Object,
            required: true,
        },
        currentUserAnswer: {
            // type: Array,
            required: true,
        },
    },
    computed: {
        isFeedbackMode(){
            return this.$store.state.isFeedbackMode
        },
        userAnswers() {
            var userAnswers = [];
            var answer;
            for(var i=0; i<this.dropZones.length; i++){
                answer=this.dropZones[i].items;
                if(answer!=='')
                    userAnswers[i]=answer;
            }
            return userAnswers
        }
    },
    methods: {
        startDrag(event, item, dropZone) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemID', item.id);
            if(dropZone==='start')
                event.dataTransfer.setData('itemParent', dropZone);
            else
                event.dataTransfer.setData('itemParent', dropZone.id);
        },
        onDrop(event, dropZone) {
            var itemID = event.dataTransfer.getData('itemID');
            var itemParentID = event.dataTransfer.getData('itemParent');
            var item = -1;
            console.log("dropZones= " + this.dropZones);
            console.log("dropZone= " + dropZone);
            if(dropZone !== 'start') {
                if (itemParentID !== 'start') {
                    item = this.dropZones[itemParentID].item;
                    this.dropZones[itemParentID].item = '';
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
            } else if (itemParentID !== 'start') {
                item = this.dropZones[itemParentID].item;
                this.dropZones[itemParentID].item = '';
                this.items.push(item);
            }
        }
    },
    created(){
        var isUserAnswerEmpty = this.currentUserAnswer === -1;
        if(!isUserAnswerEmpty){
            this.userAnswers = this.currentUserAnswer;
        }
        for(var i=0; i< this.temporaryCurrentQuestion.options.length; i++) {
            this.dropZones.push({'id': i, 'title': this.temporaryCurrentQuestion.options[i], 'item': ''});
            this.items.push({'id': i, 'title': this.temporaryCurrentQuestion.answers[i]});
            if(isUserAnswerEmpty){
                this.userAnswers.push(-1);
            }
            else {
                if(this.userAnswers[i]!==-1){
                    this.dropZones[i].item = this.items.splice(this.userAnswers[i], 1);
                }
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
    text-align: center;
}

.draggables {
    width: 30%;
    min-height: 20%;
    background-color: rgb(238, 238, 238);
    margin: 2%;
}

.droppables {
    width: 100%;
    min-height: 20%;
    display: flex;
    margin: 2%;
}

.drop-in {
    width: 50%;
    /* height: 50%; */
    height: fit-content;
    background-color: rgb(238, 238, 238);
    margin: 2%;
}

.items {
    background-color: rgb(236, 238, 240);
    padding: 2%;
    margin: 6%;


}

.start-items-box {
    background-color: var(--yellow);
}
</style>