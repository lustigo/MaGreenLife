<template>
  <v-container>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </v-container>
</template>

<script>
export default {
  methods: {
    onDecode: code => {
      console.log(code);
    }
  }
};
</script>
