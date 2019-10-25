<template>
  <v-card>
    <v-container>
        <v-row justify="space-around">
            <v-col cols=3 >
                FirstCol
            </v-col>
            <v-col cols=8>
                <v-row>
                    <v-card-title>
                        Title
                    </v-card-title>
                    
                </v-row>
                <v-row>
                    <v-card-text>
                    Description
                    </v-card-text>
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
