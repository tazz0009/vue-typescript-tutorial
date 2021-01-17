<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ msg }} !!</h1>
        <h1>{{ firstName }}</h1>
        <h1>{{ lastName }}</h1>
        <h1>{{ fullName }}</h1>
        <h4>{{ counter }}</h4>
        <v-btn @click="incrementCounter">Press Me</v-btn>
        <h4>{{ getIsLogin }}!!</h4>
        <v-btn @click="setIsLogin(true)">setIsLogin true</v-btn>
        <v-btn @click="setIsLogin(false)">setIsLogin false</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const login = namespace("login");

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  firstName = "Erik";
  lastName = "Hanchett";
  counter = 0;

  // lifecycle hook
  mounted() {
    console.log("mounted!!");
  }

  // computed
  get fullName(): string {
    console.log("msg :", this.msg);
    return this.firstName + " " + this.lastName;
  }

  // method
  incrementCounter(): void {
    this.counter++;
  }

  @login.Getter
  public getIsLogin!: boolean;

  @login.Mutation
  public setIsLogin!: (value: boolean) => void;

  @login.Action
  public updateIsLogin!: (value: boolean) => void;
}
</script>
