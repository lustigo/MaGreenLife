<template>
  <v-card>
    <v-container>
      <v-row justify="space-around">
        <v-col cols="3">
          <v-img
            src="https://images.unsplash.com/photo-1569488859134-24b2d490f23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <h1>Kilo Saver</h1>
          </v-row>
          <v-row>
            <v-card-text>You saved 10 cups and 1KG of CO2!</v-card-text>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({})
};
</script>
