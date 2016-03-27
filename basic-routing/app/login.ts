import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {User}      from './new-user';

@Component({
   selector: 'my-app',
   template: `
     <div>
       <br />
       <label for="uname">Username:</label>
       <input #uname> <br />
       <label for="passwd">Password:</label>
       <input #passwd> <br />
       <button (click)="clickMe(uname.value,passwd.value)">Login</button> 
     </div>
    `
})
export class Login {
   clickMe(name,pwd) {
      console.log("User is Valid: "+name+" "+pwd);
   } 
}

