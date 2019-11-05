<template>
  <v-container>
    <qrcode-stream @decode="onDecode" v-if="!scanned"></qrcode-stream>
    <v-alert type="success" v-else>
      Gut gemacht! Dir wurden 20 Credits gutgeschrieben.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      scanned: false
    };
  },
  methods: {
    onDecode(code) {
      if (/^mgl-cup/.test(code)) {
        fetch(process.env.VUE_APP_BACKEND_URL + "/points", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: localStorage.uid,
            eventtype: 1
          })
        });
        //console.log(code.slice(8));
        this.scanned = true;
      }
    }
  }
};
</script>
