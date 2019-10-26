<template>
  <v-container>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </v-container>
</template>

<script>
export default {
  methods: {
    onDecode: code => {
      if (/^mgl-cup/.test(code)) {
        //TODO: Send via sendAction
        console.log(code.slice(8));
      }
    }
  }
};
</script>
