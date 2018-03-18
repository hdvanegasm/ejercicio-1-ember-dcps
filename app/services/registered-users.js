import Service from '@ember/service';

export default Service.extend({
  users: null,

  init() {
    this._super(...arguments);
    this.set('users', []);
  },

  addUser(user) {
    this.get('users').pushObject(user);
  }
});
