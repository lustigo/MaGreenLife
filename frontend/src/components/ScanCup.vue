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
        //TODO: Send via sendAction
        console.log(code.slice(8));
        this.scanned = true;
      }
    }
  }
};
</script>
