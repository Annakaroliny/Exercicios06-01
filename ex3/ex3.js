import { LightningElement, track } from 'lwc';

export default class MyComponent extends LightningElement {
     firstName;
     lastName;
     email;
     website;
     company;
     annualRevenue;

    handleInputChange(event) {
      const field = event.target.name;
      if (field === 'firstName') {
          this.firstName = event.target.value;
          console.log('Primeiro Nome: ',this.firstName);
      } else if (field === 'lastName') {
          this.lastName = event.target.value;
          console.log('Sobrenome: ',this.lastName);
      } else if (field === 'email') {
          this.email = event.target.value;
          console.log('Email: ',this.email);
      } else if (field === 'website') {
          this.website = event.target.value;
          console.log('Website: ',this.website);
      } else if (field === 'company') {
          this.company = event.target.value;
          console.log('Company: ',this.company);
      } else if (field === 'annualRevenue') {
          this.annualRevenue = event.target.value;
          console.log('Receita Anual: ',this.annualRevenue);
      }
  }
}
