<template>
  <v-container>
    <v-card>
      <v-list>
        <v-subheader>Aktionen</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            v-on:click="item.action()"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Öffentliche Verkehrsmittel benutzen",
          icon: "mdi-bus-multiple",
          action: () => {
            this.$router.push("/action/oeffi");
          }
        },
        {
          text: "Ideen für das Stadtklima einreichen",
          icon: "mdi-city",
          action: () => {
            this.$router.push("/action/cup");
          }
        }
      ]
    };
  }
};
</script>
