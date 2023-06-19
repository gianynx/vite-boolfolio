<template>
    <header>
        <nav class="navbar pt-4 pb-4">
            <nav class="navbar navbar-expand-lg w-100">
                <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="show = !show">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-uppercase" id="navbarNav" :class="{ 'show': show }">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-3" v-for="(link, index) in navbar" :key="index">
                            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                    <div class="px-3">
                        <a href="http://localhost:8000" class="nav-link">
                            <i class="fa-solid fa-user"></i> <span>reserved area</span>
                        </a>
                    </div>
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
                    label: 'About Us',
                    routeName: 'about'
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts'
                }
            ],
            show: false
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