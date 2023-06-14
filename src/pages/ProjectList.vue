<template>
    <main>
        <div class="container position-relative">
            <div class="text-center pt-3 pb-3">
                <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            </div>
            <div class="row pb-5">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 mt-3 mb-3" v-for="(post, index) in posts" :key="post.id">
                    <div class="card w-100 h-100 mx-auto">
                        <div class="card-body position-relative">
                            <div class="card-image">
                                <img class="img-fluid" :src="post.image" :alt="post.title">
                            </div>
                            <div class="card-title text-uppercase position-absolute bottom-0 end-0 fw-bold pb-3 px-4">
                                <span class="text-secondary">Project name: </span>
                                <span class="text-primary">{{ post.title }}</span>
                            </div>
                            <div class="card-text text-uppercase position-absolute top-0 end-0 fw-bold pt-3 px-4">
                                <span class="text-secondary">Technology: </span>
                                <span class="text-primary">{{ post.technology.name }}</span>
                            </div>
                            <div class="position-absolute bottom-0 start-0 px-4 pb-4">
                                <router-link :to="{ name: 'project', params: { slug: post.slug } }">
                                    <i class="fa-solid fa-link fs-1 text-danger"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
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
export default {
    'name': 'ProjectList',
    data() {
        return {
            title: 'projects',
            posts: [],
            current_page: 1,
            last_page: 3
        }
    },
    methods: {
        getPosts(numPage) {
            axios.get(`${store.apiUrl}/posts`, {
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