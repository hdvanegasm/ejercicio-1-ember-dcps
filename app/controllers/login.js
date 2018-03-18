import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  loginStatus: service('login-status'),

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
        },
        {
          username: "vvalenciah",
          password: "vvalenciah"
        },
        {
          username: "imadrigala",
          password: "imadrigala"
        },
        {
          username: "dcanoc",
          password: "dcanoc"
        }
      ];

      const username = this.get("username");
      const password = this.get("password");
      var result = users.findBy("username", username);
      if(!result || result.password !== password) {
        this.set('response', 'Error!')
        this.set('password', '');
      } else {
        this.set('response', 'Success!')
        this.get('loginStatus').username = username;
        this.get('loginStatus').logedIn = true;
      }

    }
  }
});
