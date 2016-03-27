import {Component} from 'angular2/core';

@Component({
  selector: 'my-user',
  template: '<h1></h1>'
})
export class User {
  fname: string; 
  lname: string; 
  image: string; 

  constructor(fname:string, lname:string) { 
     this.fname = fname; 
     this.lname = lname; 
     this.image = lname; 
  }
}

