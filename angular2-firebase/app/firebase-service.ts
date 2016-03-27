import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import 'rxjs/Rx';   

@Injectable() 
export class FirebaseService {
   MyFB = 'https://oswald1.firebaseio.com/';

   constructor(private _http:Http) {
   }

   // a PUT request overrides data on Firebase 
   // a POST request creates data on Firebase 
   setUser(fname: string, lname: string) {
      const newUser = JSON.stringify({fname: fname,
                                      lname: lname}); 

      return this._http.put(this.MyFB+'user.json', newUser) 
                       .map(response => response.json());
   }  

   getUser() { 
      return this._http.get(this.MyFB+'user.json') 
                       .map(response => response.json());
   }  
}

