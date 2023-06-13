<template>
  <div class="container">
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
            <div class="card-title text-uppercase fw-bold position-absolute bottom-0 end-0 fs-5 px-4">
              <span class="text-secondary">Project name: </span>
              <a href="#" class="text-decoration-none text-primary">
                {{ post.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  'name': 'App',
  data() {
    return {
      title: 'projects',
      subtitle: 'Welcome to my Portfolio!',
      posts: [],
      apiUrl: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    getPosts() {
      axios.get(`${this.apiUrl}/posts`).then((res) => {
        // console.log(res.data.results.data);
        this.posts = res.data.results.data;
      })
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<style lang="scss" scoped></style>