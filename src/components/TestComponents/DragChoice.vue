<template>
    <div>
        <p v-html="currentQuestion.question"></p>
        <div class="drop-zones-container">
            <div class="drop-zone-start"
            @drop="onDrop($event, 'start')"
            @dragenter.prevent
            @dragover.prevent
            >
                <div class="answers"
                v-for="item in items" :key="item.id"
                @dragstart="startDrag($event, item)"
                draggable="true"
                >
                {{item.title}}
                </div>
            </div>
            <div class="drop-zone-end"
            @drop="onDrop($event, 'end')"
            @dragenter.prevent
            @dragover.prevent
            >
                <div class="drop-in"></div>
                <div class="drop-in"></div>
                <div class="drop-in"></div>
                <div class="drop-in"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'DragChoice',
    data() {
        return {
            something: -3,
            items: [
                {id: 0, title: 'Item A', dropZone: 'start'},
                {id: 1, title: 'Item B', dropZone: 'start'},
                {id: 2, title: 'Item C', dropZone: 'start'},
                {id: 3, title: 'Item D', dropZone: 'start'}
            ],
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
    },
    methods: {
        startDrag(event, item) {
            console.log("startDrag");
            console.log(item);
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemID', item.id);
        },
        onDrop(event, dropZone) {
            console.log("onDrop");
            console.log(dropZone);
            var itemID = event.dataTransfer.getData('itemID');
            console.log(this.items);
            console.log(itemID);
            var item = -1;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id === Number(itemID)) {
                    item = this.items[i];
                }
            }
            // console.log(this.items.find((item) => item.id === itemID));
            // var item = this.items.find((item) => item.id === itemID);
            console.log(item);
            item.dropZone = dropZone;
            
        }
        // startDrag = (event, item) => {
        //     console.log(item);
        //     event.dataTransfer.dropEffect = 'move';
        //     event.dataTransfer.effectAllowed = 'move';
        //     event.dataTransfer.setData('itemID', item.id);
        // },
        // onDrop = (event, dropZone) => {
        //     var itemID = event.dataTransfer.getData('itemID');
        //     var item = items.value.find((item) => item.id === itemID);
        //     item.dropZone = dropZone;
        // }
    }
    // setup() {
        // const items = ref ([
        //     {id: 0, title: 'Item A', dropZone: 'start'},
        //     {id: 1, title: 'Item B', dropZone: 'start'},
        //     {id: 2, title: 'Item C', dropZone: 'start'},
        //     {id: 3, title: 'Item D', dropZone: 'start'}
        // ])
        // const startDrag = (event, item) => {
        //     console.log(item);
        //     event.dataTransfer.dropEffect = 'move';
        //     event.dataTransfer.effectAllowed = 'move';
        //     event.dataTransfer.setData('itemID', item.id);
        // }
        // const onDrop = (event, dropZone) => {
        //     const itemID = event.dataTransfer.getData('itemID');
        //     const item = items.value.find((item) => item.id === itemID);
        //     item.dropZone = dropZone;
        // }
    // },
}
</script>

<style scoped>

.drop-zones-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row nowrap;
}

.drop-zone-start {
    width: 30%;
    min-height: 20%;
    background-color: rgb(238, 238, 238);
    margin: 2%;
}

.drop-zone-end {
    width: 100%;
    min-height: 20%;
    display: flex;
    margin: 2%;
}

.drop-in {
    width: 50%;
    height: 50%;
    background-color: rgb(238, 238, 238);
    margin: 2%;
}

.answers {
    background-color: rgb(236, 238, 240);
    padding: 2%;
    margin: 2%;
}

</style>