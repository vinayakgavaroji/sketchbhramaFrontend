import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/Users/user-service.service';
import { CandidateProfileComponent } from '../candidate-profile/candidate-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  userDetails: any;
  deleteUsers: any;
  candidateData: any;

  isloading: boolean = true;

  public registerForm: FormGroup;
  submitted: boolean = false;
  registeredMsg: boolean = false;

  constructor(public userService: UserServiceService, private router: Router, public dialog: MatDialog) {
    this.data = [];
    this.deleteUsers = [];
  }

  ngOnInit(){
    this.registerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    });
    this.userData()
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  userData(){
    this.isloading = false;
    this.userService.getLoginUsers().subscribe((a) => {
      this.data = a;
    })
  }

  registerUser(){
    const id = this.registerForm.value.id;
    this.userService.getUserDetailsById(id).subscribe((res) => {
      this.userDetails = res;
    })
  }

  deleteUser(userId: any){
    console.log("sadasdasd", userId)
    this.userService.deleteUserById(userId.id).subscribe((res) => {
      console.log("sadasdasd", res)
    });
    this.router.navigate(['dashboard'])
  }

  showPopup(data : any){
    this.userService.getUserDetailsById(data.id).subscribe((res) => {
      console.log("Data object", res);
      this.candidateData = res;
    })
  }

}
