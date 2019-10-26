<template>
  <v-container>
    <div class="divOnMain">
      <v-card id="pointTotal">
        <button v-on:click="navToDetailPointView" id="pointNumber">
          <span>{{ points }}</span>
        </button>
        <v-btn
          id="floating"
          color="accent"
          dark
          small
          absolute
          top
          right
          fab
          v-on:click="navToScanCup"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card>
    </div>
    <div class="divOnMain">
      <v-row>
        <v-spacer></v-spacer>

        <v-col cols="4">
          <v-card color="accent">
            <span>+ Daily Login</span>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <div class="divOnMain">
      <Achievement></Achievement>
    </div>
    <div class="divOnMain">
      <FriendFeed></FriendFeed>
    </div>
  </v-container>
</template>

<script>
import Achievement from "./Achievement.vue";
import FriendFeed from "./FriendFeed";

export default {
  data: () => ({
    points: ""
  }),
  components: {
    Achievement,
    FriendFeed
  },
  created() {
    this.loadData();
  },
  methods: {
    navToDetailPointView() {
      this.$router.push({ path: "/detailPoints" }).catch(() => {});
    },
    navToScanCup() {
      this.$router.push({ path: "/action/cup" }).catch(() => {});
    },
    loadData() {
      fetch(`http://localhost:4000/points?uid=${localStorage.uid}`)
        .then(r => r.json())
        .then(r => {
          this.points = r.score;
        });
    }
  }
};
</script>
<style scoped>
#pointTotal {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
#pointNumber {
  font-size: 36pt;
  height: 200px;
}
.divOnMain {
  margin-top: 2px;
}
#floating {
  top: 20px;
  right: 20px;
}
</style>
