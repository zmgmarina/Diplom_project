<template>
    <div>
    <h1>Kорзина</h1>
    
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters (['cart'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>