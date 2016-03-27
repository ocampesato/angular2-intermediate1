import {bootstrap}    from 'angular2/platform/browser'; 
import {Component}    from 'angular2/core';
import {User}         from './user-component';
import {MyPipe}       from './my-pipe';

@Component({
  selector: 'my-app',
  pipes:    [MyPipe], 
  template: `
             <div class="ui items">
               <user-item 
                *ngFor="#user of userList|myfilter"
                  [user]="user"
                  (mouseover)='mouseEvent(user)'
                  [class.chosen]="isSelected(user)"> 
                  {{user.fname}}-{{user.lname}}<br/> 
               </user-item> 
               <user-image> 
               </user-image> 
             </div> 
            ` 
}) 
class MyApp {
  user:User;
  currentUser:User;
  userList:User[];

  mouseEvent(user:User) {
     console.log("current user: "+user.fname+" "+user.lname); 
     this.currentUser = user;
  }

  isSelected(user: User): boolean {
    if (!user || !this.currentUser) {
      return false;
    }

    return user.lname === this.currentUser.lname;
  //return true; 
  }

  constructor() {
     this.userList = [
                  new User('Jane','Smith'), 
                  new User('John','Stone'), 
                  new User('Dave','Jones'), 
                 ]
  }
}

bootstrap(MyApp);

