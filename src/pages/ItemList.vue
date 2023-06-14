<template>
    <div class="container position-relative">
        <div class="text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            <h2 class="text-secondary">{{ subtitle }}</h2>
        </div>
        <div class="row pb-5">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 mt-3 mb-3" v-for="(post, index) in posts" :key="post.id">
                <div class="card w-100 h-100 mx-auto">
                    <div class="card-body position-relative">
                        <div class="card-image">
                            <a href="#">
                                <img class="img-fluid" :src="post.image" :alt="post.title">
                            </a>
                        </div>
                        <div class="card-title text-uppercase fw-bold position-absolute bottom-0 start-0 fs-5 px-4 pb-3">
                            <span class="text-secondary">Project name: </span>
                            <a href="#" class="text-decoration-none text-primary">
                                {{ post.title }}
                            </a>
                        </div>
                        <div
                            class="card-text text-uppercase fw-bold position-absolute top-0 start-50 translate-middle mt-4">
                            <span class="text-secondary">Technology: </span>
                            <a href="#" class="text-decoration-none text-primary">
                                {{ post.technology.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="position-absolute bottom-0 end-0 px-3" aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link" @click="getPosts(current_page - 1)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" @click="getPosts(current_page + 1)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    'name': 'ItemList',
    data() {
        return {
            title: 'projects',
            subtitle: 'Welcome to my Portfolio!',
            posts: [],
            apiUrl: 'http://127.0.0.1:8000/api',
            current_page: 1,
            last_page: 3
        }
    },
    methods: {
        getPosts(numPage) {
            axios.get(`${this.apiUrl}/posts`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                // console.log(res.data.results.data);
                this.posts = res.data.results.data;
                this.current_page = res.data.results.current_page;
                this.last_page = res.data.results.last_page;
            })
        }
    },
    mounted() {
        this.getPosts();
    }
}
</script>

<style lang="scss" scoped></style>