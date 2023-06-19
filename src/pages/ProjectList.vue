<template>
    <main>
        <LoaderComponent v-if="loading" />
        <div class="container position-relative" v-if="!loading">
            <div class="position-absolute top-0 end-0 px-3 mt-3">
                <select name="technology" id="technology" class="form-select" aria-label="Default select example"
                    v-model="selectedTechnology" @change="getPosts(1)">
                    <option value="">all</option>
                    <option :value="technology.id" v-for="(technology, index) in technologies" :key="technology.id">
                        {{ technology.name }}
                    </option>
                </select>
            </div>
            <div class="text-center pt-3 pb-3">
                <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            </div>
            <div class="row pb-5">
                <CardComponent v-for="(post, index) in posts" :key="post.id" :post="post" />
            </div>
            <nav class="position-absolute bottom-0 end-0 px-3" aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" :class="{ 'page-link': true, 'disabled': current_page === 1 }"
                            @click="getPosts(current_page - 1)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" :class="{ 'page-link': true, 'disabled': current_page === last_page }"
                            @click="getPosts(current_page + 1)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
export default {
    name: 'ProjectList',
    data() {
        return {
            store,
            title: "projects",
            components: {
                CardComponent,
                LoaderComponent
            },
            posts: [],
            technologies: [],
            current_page: 1,
            last_page: 3,
            loading: true,
            selectedTechnology: ''
        };
    },
    methods: {
        getPosts(numPage) {
            let params = {
                'page': numPage,
                'technology_id': this.selectedTechnology
            }
            if (this.selectedTechnology) {
                params.technology_id = this.selectedTechnology
            }
            axios.get(`${store.apiUrl}/posts`, {
                params

            }).then((res) => {
                // console.log(res);
                this.posts = res.data.results.posts.data;
                this.technologies = res.data.results.technologies;
                this.current_page = res.data.results.posts.current_page;
                this.last_page = res.data.results.posts.last_page;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    mounted() {
        this.getPosts();
    },
    components: { CardComponent, LoaderComponent }
}
</script>

<style lang="scss" scoped>
.form-select {
    width: 6.5rem;
    cursor: pointer;
}
</style>