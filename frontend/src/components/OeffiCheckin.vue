<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" raised v-if="!sent">
      <v-card-text>
        <div class="headline mb-1 text--primary">Check-In</div>
        <div>Fahrt nach {{ transportInfo.direction }}</div>
      </v-card-text>
      <v-card class="mx-auto" outlined>
        <v-card-title class="headline text--primary mb-1"
          >Wie voll ist das Fahrzeug?</v-card-title
        >
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
    <v-alert type="success" v-if="sent"
      >Sehr gut! Bahnfahren schützt das Klima. Du hast 60 Punkte
      erhalten.</v-alert
    >
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
      fetch("http://localhost:4000/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: localStorage.uid,
          eventtype: 2
        })
      });
      fetch("http://localhost:4000/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uid: localStorage.uid,
          eventtype: 3
        })
      });

      fetch("http://localhost:4000/sendAction", {
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
