<template>
  <v-container>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Die nächsten Abfahrten</v-toolbar-title>
    </v-app-bar>
    <v-list v-for="(item, i) in departures.slice(0, 5)" :key="i">
      <v-list-item color="accent" v-on:click="navigate(i)">
        <v-list-item-icon v-if="item.lineLabel / 10 >= 1">
          <v-icon>mdi-numeric-{{ Math.floor(item.lineLabel / 10) }}-box</v-icon>
          <v-icon>mdi-numeric-{{ item.lineLabel % 10 }}-box</v-icon>
        </v-list-item-icon>
        <v-list-item-icon v-else>
          <v-icon>mdi-numeric-{{ item.lineLabel }}</v-icon>
        </v-list-item-icon>
        <div>{{ item.direction }}</div>

        <v-chip color="accent" style="margin-left: 20px;">
          {{ item.time }}
        </v-chip>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      departures: []
    };
  },
  methods: {
    setDepartures(departures) {
      this.departures = departures.listOfDepartures;
    },
    navigate(i) {
      this.$router.push({
        name: "checkin",
        params: { departure: this.departures[i] }
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    fetch(process.env.VUE_APP_BACKEND_URL + "/getStationMonitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hafasId: to.params.hafasId
      })
    })
      .then(resp => resp.json().then(d => next(vm => vm.setDepartures(d))))
      .catch();
  }
};
</script>
