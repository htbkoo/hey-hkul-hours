<template>
    <div class="page-container">
        <md-app md-waterfall md-mode="fixed">
            <md-app-toolbar class="md-primary">
                <span class="md-title">{{title}}</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
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
            </md-app-drawer>

            <md-app-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum
                    magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
                    explicabo, neque.</p>
            </md-app-content>
        </md-app>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import VueMaterial from 'vue-material';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default-dark.css';

    Vue.use(VueMaterial as any);

    @Component
    export default class Hours extends Vue {
        @Prop() private title!: string;
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .md-app {
        border: 1px solid rgba(0, 0, 0, .12);
    }

    .page-content {
        min-height: 100vh;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>