import {bootstrap}      from 'angular2/platform/browser';
import {Component}      from 'angular2/core';
import {Inject}         from 'angular2/core';
import {Http}           from 'angular2/http';
import {HTTP_BINDINGS}  from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'my-app',
   template: `<button (click)="httpRequest()">Post Info</button>
              <div>
                <li *ngFor="#post of postData">
                  {{post.author}}
                  {{post.title}}
                </li>
              </div>
             `
})
class MyApp {
  postData = [];

  constructor(@Inject(Http) public http:Http) { 
  }

  httpRequest() {  
    this.http.get('http://localhost:3000/posts')
      .map(res => res.json())
      .subscribe(
        data => this.postData = JSON.stringify(data),
        err => console.log('error'),
        () => this.postInfo()
      );
  }

  postInfo() {  
     //----------------------------------------------
     // the 'eval' statement is required in order to
     // convert the data retrieved from json-server
     // to an array of JSON objects (else an error) 
     //----------------------------------------------
     var myObject = eval('(' + this.postData + ')');
     console.log("myObject = "+JSON.stringify(myObject));
     this.postData = myObject;
  }
}

bootstrap(MyApp, [HTTP_BINDINGS]);

