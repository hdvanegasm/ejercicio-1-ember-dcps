import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    calculate() {
      var number1 = this.get('number1');
      var number2 = this.get('number2');
      if(number1 > 1000 || number2 > 1000 || number1 < -1000 || number2 < -1000) {
        this.set('result', "Error, you can't add these numbers, one of them is outside of the range");
        this.set('loginResponseClass', 'response-error');
      } else {
        this.set('result', parseInt(number1) + parseInt(number2));
        this.set('loginResponseClass', 'response-error');
      }
    }
  }
});
