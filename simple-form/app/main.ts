import {bootstrap}       from 'angular2/platform/browser'; 
import {Component}       from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'my-app',
  directives: [FORM_DIRECTIVES],
  template: `
      <div class="ui raised segment">
        <h2 class="ui header">Angular 2 Form</h2>
        <form #f="ngForm"
              (ngSubmit)="onSubmit(f.value)"
              class="ui form">
    
          <div class="field">
            <label for="fname">First Name: </label>
            <input type="text"
                   id="fname"
                   placeholder="First Name"
                   ngControl="fname">
          </div>
    
          <div class="field">
            <label for="lname">Last Name: </label>
            <input type="text"
                   id="lname"
                   placeholder="Last Name"
                   ngControl="lname">
          </div>
    
          <button type="submit" class="ui button">Submit</button>
        </form>
    
    <!--
        <div *ngIf="hasData"> 
          <h2 class="ui header">Customer List</h2>
        </div> 
    -->
        <h2 class="ui header">Customer List</h2>
        <li *ngFor="#cust of customers">
         {{cust.fname}} {{cust.lname}} 
        </li>
      </div>
  `
})
export class MyForm {
  customers:Array = <Array>[];
  hasData = false;

  constructor() {
  } 
  onSubmit(form: any): void {
    console.log('Submitted value1 = ', form);
    console.log('Submitted value2 = ', form.fname);
    console.log('Submitted value3 = ', form.lname);

    // prevent duplicates and empty fields:
    validFields = this.checkFieldValues(form);
    if(validFields) {
      alert("fields are valid");
    } else { 
      alert("fields must be non-empty");
    } 

    this.customers.push({fname:form.fname, lname:form.lname});
    hasData = true;
  }

  checkFieldValues(form): bool {
      for(field in form) {
         if((form[field] === null)|| (form[field] === "")) {
            return false;
         } 
      }

      return true;
  }
}

bootstrap(MyForm);

