<template>
  <v-container>
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
    <Achievement></Achievement>
    <FriendFeed></FriendFeed>
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
    navToDetailPointView: function() {
      this.$router.push({ path: "/detailPoints" }).catch(() => {});
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