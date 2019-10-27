<template>
  <v-card>
    <v-container>
      <v-row justify="space-around">
        <v-col cols="3">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <h1>{{ title }}</h1>
          </v-row>
          <v-row>
            <div id="cardText">{{ description }}</div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  props: ["title", "description", "user", "image"]
};
</script>
<style scoped>
#cardText {
  padding-left: 0px;
  padding-top: 1em;
}
</style>
