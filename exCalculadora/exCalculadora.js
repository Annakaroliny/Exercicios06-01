import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
   num1;
   num2;
   result;

   numero1(event) {
    this.num1 = event.target.value;
  }

  numero2(event) {
    this.num2 = event.target.value;
  }

  soma() {
    this.result = parseInt(this.num1) + parseInt(this.num2);
  }
  subtracao() {
    this.result = parseInt(this.num1) - parseInt(this.num2);
  }
  divisao() {
    this.result = parseInt(this.num1) / parseInt(this.num2);
  }
  multiplicacao() {
    this.result = parseInt(this.num1) * parseInt(this.num2);
  }
}
