import {bootstrap}      from 'angular2/platform/browser';
import {Component}      from 'angular2/core';
import {Inject}         from 'angular2/core';
import {Http}           from 'angular2/http';
import {HTTP_BINDINGS}  from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'my-app',
   template: `<button (click)="httpRequest()">Employee Info</button>
              <div>
                <table>
                  <thead *ngIf="foundData">
                    <th>EMPID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </thead> 
                  <tbody>
                    <tr *ngFor="#emp of empData">
                      <td>{{emp.empid}}</td>
                      <td>{{emp.fname}}</td>
                      <td>{{emp.lname}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
             `
})
class MyApp {
  foundData = false;
  empData = [];

  constructor(@Inject(Http) public http:Http) { 
  }

  httpRequest() {  
    this.http.get('http://localhost:3000/employees')
      .map(res => res.json())
      .subscribe(
        data => this.empData = JSON.stringify(data),
        err => console.log('error'),
        () => this.empInfo()
      );
  }

  empInfo() {  
     //----------------------------------------------
     // the 'eval' statement is required in order to
     // convert the data retrieved from json-server
     // to an array of JSON objects (else an error) 
     //----------------------------------------------
     var myObject = eval('(' + this.empData + ')');
     console.log("myObject = "+JSON.stringify(myObject));
     this.empData = myObject;
     this.foundData = true;
  }
}

bootstrap(MyApp, [HTTP_BINDINGS]);

