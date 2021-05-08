<template>
  <v-card>
    <v-toolbar color="#003B6D" dark flat>
      <v-text-field
          append-icon="mdi-microphone"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab> Adress</v-tab>
          <v-tab> Information</v-tab>
          <v-tab> Contact us!</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card
              class="pa-4"
              flat
              height="700px"
              img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
          >
            <v-toolbar
                dense
            >
              <v-text-field
                  hide-details
                  prepend-icon="mdi-magnify"
                  single-line
              ></v-text-field>

              <v-btn icon>
                <v-icon>mdi-crosshairs-gps</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>
                mdi-map-marker
              </v-icon>
              Bus Map
            </v-tab>

            <v-tab>
              <v-icon left>
                mdi-image
              </v-icon>
              Bus Images
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <img src="/images/bus-map.PNG" width="100%">
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-carousel :show-arrows="false">
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-row justify="center">
          <v-col
              cols="12"
              sm="8"
          >
            <v-card>
              <v-card-title class="light-blue darken-4">
                <span class="headline white--text">Casa Bus</span>

                <v-spacer></v-spacer>

                <v-btn
                    dark
                    icon
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-btn
                    dark
                    icon
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                    dark
                    icon
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-card-title>

              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-phone</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>+212 520 55 20 55</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>client.alsaalbaida@alsa.ma</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>Alsa Al Baida
                      203, Boulevard Bir Anzarane-Casablanca
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-img
                  src="/images/casa-bus-flota-1.jpeg"
                  height="200px"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: `Search`,
  data() {
    return {
      tabs: null,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: [
        {
          src: '/images/casa-bus-flota-1.jpeg',
        },
        {
          src: '/images/casa-bus-flota-2.jpg',
        },
        {
          src: '/images/casa-bus-flota-3.jpg',
        },
      ],
      panel: [],
      itemes: 5,
    }
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    // Reset the panel
    none() {
      this.panel = []
    },
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return 'indigo'
        default:
          return 'blue-grey'
      }
    },
  },
};
</script>

<style scoped></style>
