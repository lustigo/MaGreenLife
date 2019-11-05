<template>
  <v-container>
    <v-card raised v-if="!sent">
      <v-card-subtitle>Check-In</v-card-subtitle>
      <v-card-subtitle style="font-size: 1.5em"
        >Fahrt nach {{ transportInfo.direction }}</v-card-subtitle
      >
      <v-card outlined>
        <v-card-subtitle>Wie voll ist das Fahrzeug?</v-card-subtitle>
        <v-btn-toggle v-model="occupation">
          <v-btn raised icon color="accent">
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn raised icon color="accent">
            <v-icon>mdi-account-supervisor</v-icon>
          </v-btn>
          <v-btn raised icon color="accent">
            <v-icon>mdi-account-group</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-card>
    </v-card>
    <v-btn
      outlined
      color="accent"
      block
      v-on:click="checkIn()"
      style="margin-top:10px;"
      v-if="!sent"
      >Check-In</v-btn
    >
    <v-alert type="success" v-if="sent">
      Sehr gut! Bahnfahren schützt das Klima. Du hast 60 Punkte erhalten.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      occupation: 1,
      sent: false,
      transportInfo: null
    };
  },
  created() {
    this.transportInfo = this.$route.params.departure;
  },
  methods: {
    checkIn() {
      fetch(process.env.VUE_APP_BACKEND_URL + "/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: localStorage.uid,
          eventtype: 2
        })
      });
      fetch(process.env.VUE_APP_BACKEND_URL + "/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: localStorage.uid,
          eventtype: 3
        })
      });

      fetch(process.env.VUE_APP_BACKEND_URL + "/sendAction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "rnvOccupancy",
          tourId: this.transportInfo.tourId,
          positionInTour: this.transportInfo.positionInTour,
          lineId: this.transportInfo.lineId,
          time: this.transportInfo.time,
          uid: localStorage.uid,
          occupancy: this.occupation
        })
      });
      this.sent = true;
    }
  }
};
</script>
