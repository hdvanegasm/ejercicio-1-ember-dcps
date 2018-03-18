import Service from '@ember/service';

export default Service.extend({
  logedIn: false,
  username: "NotLoggedIn",

  init() {
    this._super(...arguments);
    this.set('logedIn', false);
  },

  isLogedIn() {
    return this.logedIn;
  },

  loginUser(logedUsername) {
    this.logedIn = true;
    this.username = logedUsername;
  }
});
