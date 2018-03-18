import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  loginStatus: service('login-status'),

  beforeModel() {
    var isLogedIn = this.get('loginStatus').logedIn;
    if(!isLogedIn) {
      this.replaceWith('login');
    }
  }
});
