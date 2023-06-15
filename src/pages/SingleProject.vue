<template>
    <main>
        <div class="container text-center pt-3 pb-3">
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
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(`${store.apiUrl}/posts/${this.$route.params.slug}`).then((res) => {
                // console.log(res.data.results);
                if (res.data.results) {
                    this.project = res.data.results;
                } else {
                    this.$route.push({ name: "not-found" })
                }
            });
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped></style>