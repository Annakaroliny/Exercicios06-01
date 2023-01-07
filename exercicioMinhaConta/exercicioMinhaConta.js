import { LightningElement } from 'lwc';

export default class ExercicioMinhaConta extends LightningElement {
  nome;
  email;
  classificacao;

  listClass = [
        { label: '--Nenhum--', value: '--Nenhum--' },
        { label: 'Hot', value: 'Hot' },
        { label: 'Warm', value: 'Warm' },
        { label: 'Cold', value: 'option4' }
    ];

  tipo;

  listTipo = [
      { label: '--Nenhum--', value: '--Nenhum--' },
      { label: 'Prospect', value: 'Prospect' },
      { label: 'Customer - Direct', value: 'Customer - Direct' },
      { label: 'Customer - Channel', value: 'Customer - Channel' },
      { label: 'Technology Partner', value: 'Technology Partner' },
      { label: 'Other', value: 'Other' }
    ];
    
    botNome(event) {
      this.nome = event.detail.value;
      
    }
    botEmail(event) {
      this.email = event.detail.value;
    }
  
    botClass(event) {
      this.classificacao = event.detail.value;
  }

    botTipo(event) {
        this.tipo = event.detail.value;
    }

    criarConta() {
        console.log('Nome:', this.nome);
        console.log('Email:', this.email);
        console.log('Classificação:', this.classificacao);
        console.log('Tipo:', this.tipo);
    }
  
}