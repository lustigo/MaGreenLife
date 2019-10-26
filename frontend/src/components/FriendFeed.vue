<template>
  <div>
    <v-list>
      <v-subheader>Friend Feed</v-subheader>

      <v-card v-for="(item, i) in friendItems" :key="i">
        <v-container>
          <v-row>
            <v-col cols="2" class="pointAmount">+{{ item.amount }}</v-col>
            <v-col>
              <v-card flat class="item-text">{{ item.text }}</v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    friendItems: [
      {
        text: "Test",
        amount: 5
      },
      {
        text: "Test2",
        amount: 10
      },
      {
        text: "Test",
        amount: 5
      },
      {
        text: "Test2",
        amount: 10
      }
    ]
  })
};
</script>
<style scoped>
.item-text {
  text-align: left;
}
.pointAmount {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
