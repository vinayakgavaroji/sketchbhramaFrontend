import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, pipe } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { UserServiceService } from 'src/services/Users/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  submitted : boolean = false;
  user: [];

  constructor(private appService: AppService, private router: Router, private userService: UserServiceService) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginUser(){
    this.submitted = true;
    this.appService.getLoginUsers().subscribe((res) => {
      this.user = res.find((a:any)=> {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.id
      });
      console.log("asdasdasdas", this.user);
      if(this.user){
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      } else {
        alert("Login failed.!, User not found");
        this.loginForm.reset();
      }
    },(err)=>{
      alert("Login failed.!")
    });
  }

}
