<template>
  <div>
    <div class="half">
    <v-list>
       <v-subheader>Ranking</v-subheader>
      <v-card v-for="(item, i) in friends" :key="i">
        <v-container>
          <v-row>
            <v-col cols="3" class="pointAmount">{{ item.amount }}</v-col>
            <v-col>
              <v-card flat class="item-text">{{ item.name }}</v-card>
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
    friends: [
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
