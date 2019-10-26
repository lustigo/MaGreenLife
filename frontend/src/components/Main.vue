<template>
  <v-container>
    <div class="divOnMain">
      <v-card id="pointTotal">
        <button v-on:click="navToDetailPointView" id="pointNumber">
          <span>{{ animationPoints }}</span>
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
        <v-btn
          id="floatingRanking"
          color="secondary"
          dark
          small
          absolute
          fab
          v-on:click="navToRanking"
        >
          <v-icon>mdi-podium-gold</v-icon>
        </v-btn>
      </v-card>
    </div>
    <div class="divOnMain">
      <v-row>
        <v-spacer></v-spacer>

        <v-col cols="6">
          <v-card color="accent" id="streak">
            <span>5x MaCup Becher benutzt 💪</span>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <div class="divOnMain">
      <v-fade-transition appear>
        <Achievement></Achievement>
      </v-fade-transition>
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
    points: undefined,
    animationPoints: 0
  }),
  components: {
    Achievement,
    FriendFeed
  },
  created() {
    this.loadData();
    this.animatePoints();
  },
  methods: {
    navToDetailPointView() {
      this.$router.push({ path: "/detailPoints" }).catch(() => {});
    },
    navToScanCup() {
      this.$router.push({ path: "/action/cup" }).catch(() => {});
    },
    navToRanking() {
      this.$router.push({ path: "/ranking" }).catch(() => {});
    },
    loadData() {
      fetch(`http://localhost:4000/points?uid=${localStorage.uid}`)
        .then(r => r.json())
        .then(r => {
          this.points = r.score;
        });
    },
    animatePoints() {
      this.animationPoints = this.animationPoints + 15;
      if (this.points !== undefined && this.animationPoints >= this.points) {
        this.animationPoints = this.points;
      } else {
        setTimeout(this.animatePoints, 1000 / 30);
      }
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
#floatingRanking {
  left: 0px;
  bottom: 0px;
}
#streak {
  padding: 5px;
}
</style>
