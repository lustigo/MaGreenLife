<template>
  <div>
    <v-list>
      <v-subheader>Friends</v-subheader>

      <v-card v-for="(item, i) in friendItems" :key="i">
        <v-container v-if="typeof item.description === 'string'">
          <v-row>
            <v-col cols="2" class="pointAmount">+{{ item.score }}</v-col>
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
</template>

<script>
import Achievement from "./Achievement.vue";
export default {
  components: {
    Achievement
  },
  data: () => ({
    friendItems: []
  }),
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch(`http://localhost:4000/friendHistory?uid=${localStorage.uid}`)
        .then(r => r.json())
        .then(r => {
          this.friendItems = r;
        });
    }
  }
};
</script>
<style scoped>
.item-text {
  text-align: left;
}
.pointAmount {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
