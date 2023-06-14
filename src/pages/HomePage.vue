<template>
    <main>
        <div class="container text-center pt-3 pb-3">
            <h1 class="fw-bold text-primary text-uppercase fst-italic">{{ title }}</h1>
            <h2 class="text-secondary">{{ subtitle }}</h2>
        </div>
    </main>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            title: 'homepage',
            subtitle: 'Welcome to my Portfolio!',
        }
    }
}
</script>

<style lang="scss" scoped></style>