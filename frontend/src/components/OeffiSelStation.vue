<template>
  <v-container> </v-container>
</template>
<script>
export default {
  data() {
    return {
      hafasId: 2417
    };
  },
  created() {
    this.hafasId = this.$route.params.hafasId;
  }
};
</script>
