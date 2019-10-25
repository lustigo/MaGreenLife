import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: '#2e3440',
        secondary: '#4c566a',
        accent: '#50fa7b',
        error: '#b71c1c',
      },
      options: {
        customProperties: true,
      },
    },
  },
});
