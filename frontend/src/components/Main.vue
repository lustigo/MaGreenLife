<template>
  <v-container>
    <div class="divOnMain">
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
    <div class="divOnMain">
      <Achievement></Achievement>
    </div>
    <div class="divOnMain">
      <FriendFeed></FriendFeed>
    </div>
    <v-btn color="accent" dark small absolute bottom right fab>
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
.divOnMain {
  margin-top: 2px;
}
</style>
