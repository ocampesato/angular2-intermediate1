import {bootstrap} from 'angular2/platform/browser'; 
import {Component} from 'angular2/core';
import {User} from './user-component';

@Component({
   selector: 'user-image',
   host: {class: 'ui small image'},
   inputs: ['user'],
   template: `
      <img class="user-image" [src]="user.imageUrl">
   `
})
export class UserImage{
   user: User;
}

