import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public COMPANY_NAME = environment.COMPANY_NAME;
  
  constructor(public authService:AuthService, private _router: Router, private _renderer: Renderer2) { }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
    this._router.navigate(['/bye']);
  }

}
