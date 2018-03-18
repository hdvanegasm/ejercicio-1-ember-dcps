import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login() {
      var users = [
        {
          username: "hdvanegasm",
          password: "hdvanegasm"
        },
        {
          username: "spinos",
          password: "spinos"
        }
      ];

      const username = this.get("username");
      const password = this.get("password");

      var result = users.findBy("username", username);
      if(!result || result.password !== password) {
        this.set('password', '');
        this.set('response', 'Error!')
      } else {
        this.set('response', 'Success!')
      }

    }
  }
});
