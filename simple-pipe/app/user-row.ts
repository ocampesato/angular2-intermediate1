import {bootstrap} from 'angular2/platform/browser'; 
import {Component} from 'angular2/core';
import {UserImage} from './user-image';
import {User}      from './user-component';

@Component({
   selector: 'user-row',
   inputs: ['user'],
   host: {'class': 'item'},
   directives: [User, UserImage], 
   template: `
     <user-image [user]="user"></user-image> <div class="content">
     <div class="header">{{ user.name }}</div> <div class="meta">
     <div class="user-sku">SKU #{{ user.sku }}</div> </div>
     <div class="description">
     <user-department [user]="user"></user-department>
        </div>
       </div>
     <price-display [price]="user.price"></price-display>
   ` 
})
class UserRow {
  user: User;
}

