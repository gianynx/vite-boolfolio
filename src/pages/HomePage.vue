<template>
    <div>
        <h1>HOMEPAGE</h1>
        <h2 class="text-secondary">{{ subtitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            subtitle: 'Welcome to my Portfolio!',
        }
    }
}
</script>

<style lang="scss" scoped></style>