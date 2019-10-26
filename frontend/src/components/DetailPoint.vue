<template>
  <div>
    <div class="half">
      <v-list>
        <v-subheader>History</v-subheader>
        <v-card v-for="(item, i) in history" :key="i">
          <v-container>
            <v-row>
              <v-col cols="3" class="pointAmount">+{{ item.score }}</v-col>
              <v-col>
                <v-card flat class="item-text">{{ item.description }}</v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-list>
    </div>
    <v-divider></v-divider>
    <div class="half">
      <FriendFeed></FriendFeed>
    </div>
  </div>
</template>

<script>
import FriendFeed from "./FriendFeed.vue";
export default {
  data: () => ({
    history: [
      {
        name: "Lukas",
        amount: 510
      },
      {
        name: "Simon",
        amount: 780
      }
    ]
  }),
  components: {
    FriendFeed
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch(`http://localhost:4000/history?uid=${localStorage.uid}`)
        .then(r => r.json())
        .then(r => {
          this.history = r;
        });
    }
  }
};
</script>
<style scoped>
.half {
  max-height: 50%;
  min-height: 50%;
}
.item-text {
  text-align: left;
}
.pointAmount {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
