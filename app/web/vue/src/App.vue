<template>
    <div id="app">
        <md-app md-waterfall md-mode="fixed" class="page-content">
            <md-app-toolbar class="md-primary">
                <span class="md-title">Libraries Hours</span>
            </md-app-toolbar>

            <!--<md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>-->

            <md-app-content>
                <Hours libraryName="HKU Library"/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script lang="ts">
    import VueMaterial from 'vue-material';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default-dark.css';
    import {Component, Vue} from 'vue-property-decorator';

    import Hours from './components/Hours.vue';

    Vue.use(VueMaterial as any);

    @Component({
        components: {
            Hours,
        },
    })
    export default class App extends Vue {
    }
</script>

<style>
    #app {
    }

    body {
        overflow-y: hidden;
    }

    .page-content {
        min-height: 100vh;
    }
</style>
