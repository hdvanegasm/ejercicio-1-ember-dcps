import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  loginStatus: service('login-status'),

  beforeModel() {
    var isLogedInLocalStorage = localStorage.getItem("userLogedIn");
    var username = localStorage.getItem("username");

    if(isLogedInLocalStorage == 't') {
      this.get('loginStatus').logedIn = true;
      this.get('loginStatus').username = username;
    } else {
      this.get('loginStatus').logedIn = false;
      this.get('loginStatus').username = null;
    }
  },
});
