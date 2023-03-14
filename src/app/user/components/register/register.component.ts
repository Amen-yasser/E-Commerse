import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Registerform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private userserv:UserService) { }

  ngOnInit(): void {
    this.Registerform=this.formBuilder.group({
      fullname:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      isAdmin:false
    });
  }


  Register()
  {
    console.log(this.Registerform.value);
    this.userserv.Register(this.Registerform.value).subscribe(res=>{
      console.log(res);
    })
  }
}
