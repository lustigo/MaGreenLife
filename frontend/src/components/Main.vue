<template>
  <v-container>
    <v-row>
      <v-col col="8">
        250
      </v-col>
    </v-row>

    <v-row>
      <v-col col="8">
        + Daily Login
      </v-col>
    </v-row>

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
  }
};
</script>
