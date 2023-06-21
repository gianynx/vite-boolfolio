<template>
    <main>
        <div class="container text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            <LoaderComponent v-if="loading" />
            <div v-if="!loading"></div>
        </div>
    </main>
</template>

<script>
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
    name: 'AboutUs',
    data() {
        return {
            title: 'about us',
            components: {
                LoaderComponent
            },
            loading: true,
        }
    },
    components: { LoaderComponent }
}
</script>

<style lang="scss" scoped></style>