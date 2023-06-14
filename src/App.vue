<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: "App",
  components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped></style>