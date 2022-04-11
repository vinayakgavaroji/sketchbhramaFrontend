import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;
  registeredMsg: boolean = false;

  public registerForm: FormGroup;
  data: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(){
    this.registerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      phoneNo: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  registerUser(){
    this.submitted = true;
    const data = {
      id: this.registerForm.value.id,
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      phone_no: this.registerForm.value.phoneNo,
      password: this.registerForm.value.password
    }
    this.appService.registerUser(data).subscribe((res) => {
      alert("Registration Successfully")
      this.registerForm.reset();
      this.router.navigate(['login'])
    },(err) => {
      if(!err){
        console.log("User not registered" + err);
      } else {
        console.log("User registered successfully");
      }
    });
    this.registeredMsg = true;
  }

}
