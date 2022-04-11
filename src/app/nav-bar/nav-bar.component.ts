import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  logout(){
    this.appService.logout().subscribe((res) => {
      console.log("sadasdadasd", res);
      
    })
    this.router.navigate(['login']);
  }

}
