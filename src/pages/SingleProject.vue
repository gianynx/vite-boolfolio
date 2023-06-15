<template>
    <main>
        <LoaderComponent v-if="loading" />
        <div class="container text-center pt-3 pb-3" v-if="!loading">
            <div v-if="project">
                <div class="pt-3 pb-3">
                    <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ project.title }}</h1>
                </div>
                <img class="img-fluid" :src="project.image" :alt="project.title">
                <div class="text-uppercase fw-bold fs-3 pt-5 pb-5">
                    <span class="text-secondary">Project name: </span>
                    <span class="text-primary">{{ project.title }}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            components: {
                LoaderComponent
            },
            project: null,
            loading: true
        }
    },
    methods: {
        getProject() {
            axios.get(`${store.apiUrl}/posts/${this.$route.params.slug}`).then((res) => {
                // console.log(res.data.results);

                // if (res.data.results) {
                //     this.project = res.data.results;
                // } else {
                //     this.$route.push({ name: "not-found" })
                // }

                this.project = res.data.results;
            }).catch((error) => {
                // console.log(error);
                // console.log(error.response.data);
                this.$router.push({ name: 'not-found', query: { e: error.response.data.message } })
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    mounted() {
        this.getProject();
    },
    components: { LoaderComponent }
}
</script>

<style lang="scss" scoped></style>