<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6 mt-3 mb-3">
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
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['post']
}
</script>

<style lang="scss" scoped>
.card {
    cursor: grab;
}
</style>