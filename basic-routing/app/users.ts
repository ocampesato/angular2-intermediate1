import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {User}      from './user';

@Component({
   selector: 'my-app',
   template: `<div>
                <ul>
                  <li *ngFor="#user of users" (click)="onSelect(user)">
                    {{user.fname}} 
                  </li>
                </ul>
              </div>`
})
export class Users {
   users = [
             new User("Jane"), 
             new User("Dave"), 
             new User("Tom") 
           ];

   onSelect(user) {
      console.log("Selected user: "+JSON.stringify(user));
      var index = this.users.indexOf(user);
      this.users.splice(index,1);
   } 
}

