import {Component}    from 'angular2/core';
import {User}         from './user-component';

@Component({
  selector: 'my-user',
  template: '<h3></h3>'
})
export class UserService {
  userList:User[];

  constructor() {
     this.userList = [
                  new User('Jane','Smith'), 
                  new User('John','Stone'), 
                  new User('Dave','Jones'), 
                 ]
  } 

  getUserList() {
     return this.userList;
  } 
}

