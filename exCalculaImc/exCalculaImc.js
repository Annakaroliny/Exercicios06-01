import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
   nome;
   peso;
   altura;
   imc;
   
   
   botNome(event) {
    this.nome = event.target.value;
  }

   botPeso(event) {
    this.peso = event.target.value;
  }

  botAltura(event) {
    this.altura = event.target.value;
  }

  calcula() {
    this.imc = this.peso / (this.altura * this.altura);
  }
  textNome = 'Seu imc é:';
  

}
