<template>
  <v-dialog v-model="dialog" persistent max-width="600px" content-class="overflow-x-hidden">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#1C6EA4" dark v-bind="attrs" v-on="on">
        Login
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="popup-header">
        <span class="headline">User Profile</span>
        <span class="popup-close "><v-icon class="pa-4" @click="dialog = false">mdi-close</v-icon></span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="Password*"
                  type="password"
                  required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-btn color="#1C6EA4" class="d-flex ma-auto pa-4">
        Log In
      </v-btn>
      <div class="d-flex  pa-4" @click="dialog = false">
        <router-link to="./ForgottenPassword" class="d-flex ma-auto">Forgotten password?</router-link>
      </div>
      <router-link to="./NewAccount"><v-btn color="green" class="d-flex ma-auto pa-4" @click="dialog = false">
        Creat New account
      </v-btn></router-link>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginButton",
  data: () => ({
    dialog: false
  })
};
</script>

<style lang="stylus">
.popup
  &-close
    position absolute
    right 0
    top 0
    cursor pointer

  &-header
    position relative
</style>
