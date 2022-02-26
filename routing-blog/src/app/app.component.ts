import { Component } from '@angular/core';

import{UserDataService} from './services1/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API in Angular';
  users:any;
  constructor(private userData:UserDataService){
    userData.users().subscribe((data)=>{
      console.log("data",data);
      this.users=data;
    });
  }
  
}
