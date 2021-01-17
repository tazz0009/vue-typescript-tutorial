import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";

@Module({ namespaced: true, name: "login" })
class Login extends VuexModule {
  public isLogin = false;

  get getIsLogin() {
    return this.isLogin;
  }

  @Mutation
  public setIsLogin(value: boolean): void {
    this.isLogin = value;
  }

  @Action
  public updateIsLogin(value: boolean): void {
    this.context.commit("setIsLogin", value);
  }
}
export default Login;
