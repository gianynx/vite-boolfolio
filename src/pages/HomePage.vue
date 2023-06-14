<template>
    <main>
        <div class="container pt-4 pb-5">
            <h1 class="text-primary text-center fst-italic pt-3 pb-5">{{ title }}</h1>
            <img src="img/logo.jpg" alt="portfolio_logo" class="w-100 pt-3 pb-5">
        </div>
    </main>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            title: 'Welcome to my Portfolio!',
        }
    }
}
</script>

<style lang="scss" scoped></style>