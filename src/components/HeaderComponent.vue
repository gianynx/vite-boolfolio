<template>
    <header>
        <div class="container">
            <nav class="navbar pt-4">
                <nav class="navbar navbar-expand-lg">
                    <!-- <a class="navbar-brand" href="#">Portfolio</a> -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav px-5">
                            <li class="nav-item px-5" v-for="(link, index) in navbar" :key="index">
                                <router-link :to="{ name: link.routeName }" class="nav-link">
                                    {{ link.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            navbar: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Items',
                    routeName: 'items'
                },
                {
                    label: 'About',
                    routeName: 'about'
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>