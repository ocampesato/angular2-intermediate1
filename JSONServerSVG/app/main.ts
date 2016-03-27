import {bootstrap}      from 'angular2/platform/browser';
import {Component}      from 'angular2/core';
import {Inject}         from 'angular2/core';
import {Http}           from 'angular2/http';
import {HTTP_BINDINGS}  from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'my-app',
   template: `<div>
                <button (click)="httpRequest()">SVG Code</button>
              <div>
              <svg id="svg" width="800" height="500">
              </svg>
              `
})
class MyApp {
  svgData = [];

  constructor(@Inject(Http) public http:Http) { 
  }

  httpRequest() {  
    this.http.get('http://localhost:3000/svg')
      .map(res => res.json())
      .subscribe(
        data => this.svgData = JSON.stringify(data),
        err => console.log('error'),
        () => this.svgInfo()
      );
  }

  svgInfo() {  
     //----------------------------------------------
     // the 'eval' statement is required in order to
     // convert the data retrieved from json-server
     // to an array of JSON objects (else an error) 
     //----------------------------------------------
     var myObject = eval('(' + this.svgData + ')');
     console.log("myObject = "+JSON.stringify(myObject));
     this.svgData = myObject;

     this.graphics();
  }

  graphics() {
     var svgns = "http://www.w3.org/2000/svg";
     var svg   = document.getElementById("svg");
     var colors = ["#ff0000", "#0000ff"];

     this.svgData.map(function(obj) {
        var ellipse = document.createElementNS(svgns, "ellipse");
        ellipse.setAttribute("cx", obj.cx);
        ellipse.setAttribute("cy", obj.cy);
        ellipse.setAttribute("rx", obj.rx);
        ellipse.setAttribute("ry", obj.ry);
        ellipse.setAttribute("fill", obj.fill);
        svg.appendChild(ellipse);
     }
  }
}

bootstrap(MyApp, [HTTP_BINDINGS]);

