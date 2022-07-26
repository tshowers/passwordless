import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  public logoName = environment.COMPANY_NAME;
  public logoURL = "http://via.placeholder.com/100x100";
  public homePageLink = "/";
  public headingText = "You are logged out";

  constructor() { }

  ngOnInit(): void {
  }

}
