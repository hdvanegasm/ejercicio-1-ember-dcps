import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  loginStatus: service('login-status'),
  registeredUsers: service('registered-users'),

  beforeModel() {
    var isLogedIn = this.get('loginStatus').logedIn;
    if(!isLogedIn) {
      this.replaceWith('login');
    }
  },

  model() {
    return this.get('registeredUsers').users;
  }
});
