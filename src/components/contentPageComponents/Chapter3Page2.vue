<template>
    <div class="page-content chapter3-page2">
        <div class="content-title">לפני ההכרזה</div>
        <p>
            בטווח הזמנים טרם הכרזת המלש"ב כמשתמט, ישנם מספר הליכים מחייבים אותם נדרשת לשכת הגיוס לעשות.
        </p>
        <p><b>ראשית, נבצע את 5 הפעולות הבאות:</b></p>
        <vue-collapsible-panel-group accordion>
            <vue-collapsible-panel>
                <template #title>
                    <img class="accordion-icon" src="../../media/graphics/contact.svg"/>
                    צור קשר
                </template>
                <template #content>
                    Panel A Content
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <template #title>
                    <img class="accordion-icon" src="../../media/graphics/travelling.svg"/>
                    בדוק שהייה בארץ
                </template>
                <template #content>
                    Panel B Content
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <img class="accordion-icon" src="../../media/graphics/cardiogram.svg"/>
                <template #title>
                    וודא כשירות
                </template>
                <template #content>
                    Panel C Content
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <img class="accordion-icon" src="../../media/graphics/personal-information.svg"/>
                <template #title>
                    בדוק מידע רגיש
                </template>
                <template #content>
                    Panel D Content
                </template>
            </vue-collapsible-panel>
            <vue-collapsible-panel :expanded="false">
                <img class="accordion-icon" src="../../media/graphics/check.svg"/>
                <template #title>
                    וודא תקינות
                </template>
                <template #content>
                    Panel E Content
                </template>
            </vue-collapsible-panel>
        </vue-collapsible-panel-group>
    </div>
</template>

<script>
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

export default {
    name: 'Chapter3Page2',
    components: { 
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel,
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

</style>