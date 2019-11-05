<template>
  <div>
    <div class="half">
      <v-list>
        <v-subheader>History</v-subheader>
        <v-card v-for="(item, i) in history" :key="i">
          <v-container v-if="typeof item.description === 'string'">
            <v-row>
              <v-col cols="3" class="pointAmount">+{{ item.score }}</v-col>
              <v-col>
                <v-card flat class="item-text">{{ item.description }}</v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container v-if="typeof item.description === 'object'">
            <Achievement
              :title="item.description.title"
              :description="item.description.description"
              :image="item.description.image"
            ></Achievement>
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
import Achievement from "./Achievement.vue";
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
    FriendFeed,
    Achievement
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch(process.env.VUE_APP_BACKEND_URL + `/history?uid=${localStorage.uid}`)
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
