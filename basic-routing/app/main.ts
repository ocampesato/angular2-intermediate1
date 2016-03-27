import {Component}         from 'angular2/core';
import {bootstrap}         from 'angular2/platform/browser';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig}       from 'angular2/router';

import {About} from './about';
import {Login} from './login';
import {Users} from './users';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Angular 2 Router</h1>
    <nav>
      <a [routerLink]="['About']">About</a>
      <a [routerLink]="['Login']">Login</a>
      <a [routerLink]="['Users']">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/about', name: 'About', component: About},
  {path: '/login', name: 'Login', component: Login, useAsDefault:true},
  {path: '/users', name: 'Users', component: Users}
])
export class MyApp { }

bootstrap(MyApp, [ROUTER_PROVIDERS]);

