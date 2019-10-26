<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-card-text>
        <div class="headline mb-1 text--primary">Abfahrtsbahnhof</div>
        <div>Von welchem Bahnhof fährst du ab?</div>
      </v-card-text>
      <v-text-field
        outlined
        color="accent"
        v-model="query"
        @keyup.enter.native="searchStation"
      ></v-text-field>
      <v-btn outlined color="accent" block v-on:click="searchStation"
        >Weiter</v-btn
      >
    </v-card>
    <v-card style="margin-top: 5px;">
      <v-card class="mx-auto" outlined id="imageTrains">
        <v-img
          src="https://cdn.pixabay.com/photo/2018/09/30/19/03/metro-3714290_960_720.jpg"
        ></v-img>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    async searchStation() {
      if (this.query == "") {
        return;
      }

      const resp = await fetch("http://localhost:4000/getStation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: this.query
        })
      });
      resp
        .json()
        .then(station => {
          this.$router.push({
            name: "selStation",
            params: { hafasId: station.hafasId }
          });
        })
        .catch(console.log);
    }
  }
};
</script>
<style scoped>
#imageTrains {
  margin-right: auto;
  margin-left: auto;
}
</style>
