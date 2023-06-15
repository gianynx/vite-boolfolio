<template>
    <main>
        <div class="container position-relative">
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
import { store } from '../store';
import axios from 'axios';
import CardComponent from '../components/CardComponent.vue';
export default {
    name: 'ProjectList',
    data() {
        return {
            title: "projects",
            components: {
                CardComponent
            },
            posts: [],
            current_page: 1,
            last_page: 3
        };
    },
    methods: {
        getPosts(numPage) {
            axios.get(`${store.apiUrl}/posts`, {
                params: {
                    "page": numPage
                }
            }).then((res) => {
                // console.log(res.data.results.data);
                this.posts = res.data.results.data;
                this.current_page = res.data.results.current_page;
                this.last_page = res.data.results.last_page;
            });
        }
    },
    mounted() {
        this.getPosts();
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped></style>