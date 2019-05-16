import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  firstName  : string ;
  lastName : string ;
  age : number;
  foo : any ;
  hasKid : boolean ;
  numArray : number [] ;
  stringArray : string [] ;
  mixedArray : any [] ;
  constructor() {
    this.firstName = "Dileep";
    this.lastName = "Kumar";
    this.age = 23;
    this.foo = true ;
    this.hasKid = true ;
    this.numArray = [3,4,43];
    this.stringArray = ['Dileep','kumar'] ;
    this.mixedArray = ['dileo',true,undefined,343] ;
    console.log("Hello User.....");
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }
   sayHello(){
    console.log(`Hello ${this.firstName + this.lastName }`);
  }
  hasBirthday(){
    this.age += 1;
  }

  ngOnInit() {
  }

}
