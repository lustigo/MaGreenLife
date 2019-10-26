<template>
  <v-container>
    <div>
      <v-card>
        <v-row>
          <v-col col="8">
            <button v-on:click="navToDetailPointView" id="pointNumber">
              <span>250</span>
            </button>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="8">+ Daily Login</v-col>
        </v-row>
      </v-card>
    </div>
    <div>
      <Achievement></Achievement>
    </div>
    <div>
      <FriendFeed></FriendFeed>
    </div>
    <v-btn
      color="accent"
      dark
      small
      absolute
      bottom
      right
      fab
      v-on:click="navToScanCup"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import Achievement from "./Achievement.vue";
import FriendFeed from "./FriendFeed";

export default {
  data: () => ({}),
  components: {
    Achievement,
    FriendFeed
  },
  methods: {
    navToDetailPointView() {
      this.$router.push({ path: "/detailPoints" }).catch(() => {});
    },
    navToScanCup() {
      this.$router.push({ path: "/action/cup" }).catch(() => {});
    }
  }
};
</script>
<style scoped>
#pointNumber {
  font-size: 36pt;
  height: 200px;
}
</style>
