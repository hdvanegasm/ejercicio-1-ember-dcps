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
        this.set('loginResponseClass', 'response-error');
        localStorage.setItem("userLogedIn", 'f');
        localStorage.setItem("username", null);
        this.get('loginStatus').logedIn = false;
        this.get('loginStatus').username = null;
      } else {
        this.set('response', 'Success!')
        this.get('loginStatus').username = username;
        this.get('loginStatus').logedIn = true;
        this.set('loginResponseClass', 'response-success');
        localStorage.setItem("userLogedIn", 't');
        localStorage.setItem("username", username);
      }

    },

    logout() {
      console.log('oe');
      localStorage.setItem("userLogedIn", 'f');
      localStorage.setItem("username", null);
      this.get('loginStatus').logedIn = false;
      this.get('loginStatus').username = null;
    }
  }
});
