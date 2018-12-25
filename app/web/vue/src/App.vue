<template>
    <div id="app">
        <Hours title="HKU Libraries Hours"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Hours from './components/Hours.vue';

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
</style>
