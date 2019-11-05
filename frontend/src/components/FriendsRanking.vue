<template>
  <div>
    <v-list>
      <v-header>Ranking</v-header>

      <v-card v-for="(item, i) in friends" :key="i">
        <v-container>
          <v-row>
            <v-col cols="2" class="rank">{{ i + 1 }}</v-col>
            <v-col>
              <v-card flat class="item">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>{{ item.COUNT }}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    friends: []
  }),
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch(process.env.VUE_APP_BACKEND_URL + `/ranking?uid=${localStorage.uid}`)
        .then(r => r.json())
        .then(r => {
          this.friends = r;
        });
    }
  }
};
</script>
<style scoped>
.item {
  text-align: left;
}
.rank {
  font-size: 2em;
  vertical-align: middle;
  font-weight: bold;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
