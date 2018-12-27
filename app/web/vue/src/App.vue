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
                <Hours
                        v-for="place in places"
                        v-bind:key="place.id"
                        v-bind:libraryName="place.name"
                        v-bind:banner="place.banner"
                />
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
        places = [
            {id: 1, name: "HKU Library", banner: {src: "hkul/wikipedia/hkul_banner.jpg", alt: "HKU Main Library"}}
            // https://upload.wikimedia.org/wikipedia/commons/e/ed/HKU_%E9%A6%99%E6%B8%AF%E5%A4%A7%E5%AD%B8_Sun_Yat-sen_Place_%E4%B8%AD%E5%B1%B1%E5%BB%A3%E5%A0%B4_Main_Library_facade_March-2012_Ip4.jpg
        ]
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
