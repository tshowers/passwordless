import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-check-inbox',
  templateUrl: './check-inbox.component.html',
  styleUrls: ['./check-inbox.component.css']
})
export class CheckInboxComponent implements OnInit {

  public contactLink = "/contact";
  public contactLinkText = "Contact us";

  constructor(public authService: AuthService, private _location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this._location.back();
  }

}
