<template>
  <v-container>
    <v-layout text-center wrap>
      <p v-if="answered == 'true'">Du hast heute schon, digga</p>
      <p v-else-if="answered == 'false' && error">Es lief leider nicht alles glatt, versuche es später noch einmal 😥</p>
      <v-card v-else-if="answered == 'false'" class="mx-auto" max-width="344" outlined>
        <v-card-text>
          <div class="overline mb-4">Frage von {{ this.question.source }}</div>
          <div class="headline mb-1 text--primary">Tagesfrage</div>
          <div>{{ this.question.question }}</div>
        </v-card-text>
        <div> <v-btn outlined block color="deep-purple accent-4" v-on:click="solve(0);">{{ this.question.answers[0] }}</v-btn> </div>
        <div> <v-btn outlined block color="deep-purple accent-4" v-on:click="solve(1);">{{ this.question.answers[1] }}</v-btn> </div>
        <div> <v-btn outlined block color="deep-purple accent-4" v-on:click="solve(2);">{{ this.question.answers[2] }}</v-btn> </div>
      </v-card>

      <v-dialog v-model="dialog" max-width="344">
        <v-card outlined>
          <v-card-title class="headline">{{ this.title }}</v-card-title>
          <v-card-text>{{ this.question.answerExplaination }}</v-card-text>
          <v-btn text @click="dialog = false">Schließen</v-btn>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      question: {
        source: "",
        answers: ["", "", ""],
        question: ""
      },
      error: null,
      answered: false,
      dialog: false,
      title: "TITEL"
    };
  },
  beforeRouteEnter(to, from, next) {
    fetch("http://localhost:4000/getQuestionOfDay")
      .then(q => q.json().then(question => next(vm => vm.setData(question))))
      .catch(err => next(vm => vm.setError(err)));
  },
  created() {
    this.answered = localStorage.answered;
  },
  methods: {
    setData(q) {
      this.question = q;
    },
    setError(e) {
      this.error = e;
    },
    solve(answer) {
      if (answer == this.question.correctAnswerIndex) {
        //TODO: Add points
        this.title = "RICHTIG 🥳";
        this.dialog = true;
      } else {
        this.dialog = true;
        this.title = "FALSCH 😟";
      }
      localStorage.answered = true;
      this.answered = true;
    }
  }
};
</script>
