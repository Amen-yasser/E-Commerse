import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userserv: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.Loginform = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  Login() {
    console.log(this.Loginform.value);
    this.userserv.Login(this.Loginform.value).subscribe((res: any) => {
        if (this.Loginform.valid) 
          localStorage.setItem('userToken', res.token);
          this.userserv.saveUserData();
          this._router.navigate(['Products']);

    },error=>{
      alert("you should Register First");
      this._router.navigate(['Register']);
    })
  }
}
