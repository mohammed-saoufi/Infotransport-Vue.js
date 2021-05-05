<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {Footer, AppBar},
  data: () => ({
    //
  }),
};
</script>
