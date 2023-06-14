<template>
    <div>
        <h1>SINGLE ITEM</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            product: null
        }
    },
    methods: {
        getProduct() {
            axios.get()
        }
    }
}
</script>

<style lang="scss" scoped></style>