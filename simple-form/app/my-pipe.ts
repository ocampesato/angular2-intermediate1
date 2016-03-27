import {bootstrap}    from 'angular2/platform/browser'; 
import {Component}    from 'angular2/core';
import {Pipe}         from 'angular2/core';

@Pipe({
  name: "myfilter"
})

export class MyPipe {
  transform(item) {
    return item.filter((item) => item.fname.startsWith("J")); 
  //return item.filter((item) => item.lname.endsWith("th")); 
  //return item.filter((item) => item.lname.contains("n")); 
  } 
}

