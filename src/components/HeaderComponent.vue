<template>
    <header>
        <nav class="navbar pt-4 pb-4">
            <nav class="navbar navbar-expand-lg mx-auto">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav px-5">
                        <li class="nav-item text-uppercase px-5" v-for="(link, index) in navbar" :key="index">
                            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>
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
                    label: 'Projects',
                    routeName: 'projects'
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

<style lang="scss" scoped>
header {
    background-color: #8e81f4;

    nav .navbar {
        background-color: #e3f2fd;
    }

    .navbar-nav .nav-link.active,
    .navbar-nav .nav-link.show {
        background-color: #3a90ff;
    }
}
</style>