<template>
  <v-app-bar app color="#003B6D" >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="/images/Logo.png"
          width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <div class="Welcome">
      <spam>Welcome to Infotransport</spam>
    </div>
    <v-spacer></v-spacer>
    <LoginButton></LoginButton>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style lang="stylus" scoped>
.Welcome
  font-family Georgia, serif
  font-size 50px
  letter-spacing 6px
  word-spacing 2px
  color #44D9E6
  font-weight 400
  font-style italic
  font-variant small-caps
  text-transform none
  text-shadow 1px 2px 2px #ffff
</style>