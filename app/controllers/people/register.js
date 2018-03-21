import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  registeredUsers: service('registered-users'),

  actions: {
    register() {
      // Validates if the string is alphabetic only
      var regExpressionName = /^[a-zA-Z]+$/;
      var regExpressionSalary = /^[0-9]+$/;

      var name = this.get('name');
      var salary = this.get('salary');
      var gender = this.get('gender');

      if(regExpressionName.test(name) && regExpressionSalary.test(salary) && (gender === 'F' || gender === 'M')) {
        var newUser = {
          name: name,
          salary: salary,
          gender: gender
        }
        this.get('registeredUsers').addUser(newUser);
        this.set('response', 'Successful registration');
        this.set('name', '');
        this.set('salary', '');
        this.set('gender', '');
        this.set('loginResponseClass', 'response-success');
      } else {
        this.set('response', 'There are fields with errors');
        this.set('loginResponseClass', 'response-error');
      }
    }
  }
});
