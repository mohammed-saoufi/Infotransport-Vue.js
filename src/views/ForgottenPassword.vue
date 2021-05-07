<template>
  <v-card class="mx-auto my-12" max-height="" max-width="374">
    <v-form v-model="valid">
      <v-container>
        <h3>Find Your Account</h3>
        <v-divider></v-divider>
        <span>Please enter your email address or phone number to search for your account.</span>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail or Number"
            required
        ></v-text-field>
        <div>
          <router-link to="./"><v-btn >Cancel</v-btn></router-link>
          <v-btn color="#1C6EA4">Search</v-btn>
        </div>
      </v-container>
    </v-form>  </v-card>
</template>

<script>
export default {
  name: "Forgotten password",
  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style scoped>

</style>