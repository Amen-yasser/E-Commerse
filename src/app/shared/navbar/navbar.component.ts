import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLogin:boolean=false;
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {
    this._UserService.Userdata.subscribe(()=>{
      if(this._UserService.Userdata.getValue()!=null)
      {
        this.isLogin=true;
      }else
      {
        this.isLogin=false;

      }
    });
  }

  logout()
  {
    this._UserService.Logout();
  }
}
