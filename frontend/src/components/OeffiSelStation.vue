<template>
  <v-container> </v-container>
</template>
<script>
export default {
  data() {
    return {
	  stations: []
    };
  },
  methods: {
	  setStations(stations) {
		  console.log(stations);
		  this.stations = stations;
	  }
  },
  beforeRouteEnter (to, from, next) {
	  fetch("http://localhost:4000/getStationMonitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hafasId: to.params.hafasId
        })
	  }).then(resp => resp.json().then(s => next(vm => vm.setStations(s)))).catch(console.log);
}

};
</script>
