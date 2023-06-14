<template>
    <main>
        <div class="container text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
        </div>
    </main>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            title: 'project',
            product: null
        }
    },
    methods: {
        getProduct() {
            axios.get(`${store.apiUrl}/posts/${this.$route.params.slug}`).then((res) => {
                // console.log(res.data.results);
                this.product = res.data.results;
            });
        }
    },
    mounted() {
        this.getProduct();
    }
}
</script>

<style lang="scss" scoped></style>