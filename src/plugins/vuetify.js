import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            dark: {
                primary: "003B6D",
                secondary: "005F9C",
                accent: "0188CE"
            }
        }
    }
};
export default new Vuetify(opts);