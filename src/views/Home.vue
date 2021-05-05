<template>
  <div className="home">
    <my-section background-image="/images/transport.PNG">
      <v-img src="/images/Logo.png" contain class="ma-auto mb-1" height="130px" width="250px"></v-img>
      <v-card width="40%" class="ma-auto mb-16" height="50px">
        <v-text-field placeholder="search..." color="white" class="input d-flex ma-auto "></v-text-field>
      </v-card>
    </my-section>

  </div>
</template>

<script>
import MySection from "../components/MySection";

export default {
  name: "Home",
  components: {MySection}
};
</script>

<style lang="stylus" scoped>

</style>