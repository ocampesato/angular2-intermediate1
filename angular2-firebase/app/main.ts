import {bootstrap}       from 'angular2/platform/browser'; 
import {Component}       from 'angular2/core';
import {ControlGroup}    from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS}  from 'angular2/http';
import {FirebaseService} from './firebase-service';

@Component({
  selector:   'my-app',
  providers:  [FirebaseService],
  directives: [FORM_DIRECTIVES],
  template: `
       <div class="ui items">
         <h2 class="ui header">Firebase and Angular 2</h2>
         <form #f="ngForm"
               (ngSubmit)="onSubmit(f)" 
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
       </div> 
       <div class="container" id="response"> 
         Firebase Response: {{response}} 
       </div> 
      `
}) 
export class MyApp {
   response:string;

   constructor(private _firebaseService: FirebaseService) {
   }

   onSubmit(form: ControlGroup) {
console.log("submitting user to firebase instance...");
      this._firebaseService.setUser(form.value.fname,
                                    form.value.lname) 
          .subscribe(
             user  => this.response = JSON.stringify(user),
             error => console.log(error)
          );
   }

   onGetUser() {
console.log("getting user from firebase instance...");
      this._firebaseService.getUser() 
          .subscribe(
             user  => this.response = JSON.stringify(user),
             error => console.log(error)
          );
   } 
}

bootstrap(MyApp, [HTTP_PROVIDERS]);

