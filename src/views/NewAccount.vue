<template>
  <v-card class="mx-auto my-12"  max-width="374">
    <v-form v-model="valid">
      <v-container>
        <h3>Sign Up</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
          </v-col>
        </v-row>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            type="password"
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
        ></v-text-field>
        <v-btn class="d-flex ma-auto" color="green">Sign Up</v-btn>
      </v-container>
    </v-form>  </v-card>
</template>

<script>
export default {
  name: "NewAccount",
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'password is required',
      v => v.length <= 10 || 'password must be valid',
    ],
  }),
}
</script>

<style scoped>

</style>