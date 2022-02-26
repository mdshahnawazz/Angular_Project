import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:"Anil",age:28,email:'anil@gmail.com'},
      {name:"Ravi",age:30,email:'Ravi@gmail.com'},
      {name:"Ramesh",age:21,email:'Ramesh@gmail.com'},
      {name:"Rohit",age:22,email:'Rohit@gmail.com'},
    ]
  }
}
