import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/services/Users/user-service.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {

  @Input() candidateData : any;
  
  constructor() { }

  ngOnInit(){
  }

}
