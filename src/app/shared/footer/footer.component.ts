import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public buttonText1 = "Home";
  public buttonText2 = "About";
  public buttonText3 = "Contact";
  public buttonText4 = "Products";

  public buttonLink1 = "/welcome";
  public buttonLink2 = "/";
  public buttonLink3 = "/contact";
  public buttonLink4 = "/";

  public socialText1 = "Facebook";
  public socialText2 = "Twitter";
  public socialText3 = "Instagram";
  public socialText4 = "GitHub";
  public socialText5 = "Linkedin";

  public socialLink1 = "/";
  public socialLink2 = "/";
  public socialLink3 = "/";
  public socialLink4 = "/";
  public socialLink5 = "/";

  public socialIcon1 = "fa-facebook";
  public socialIcon2 = "fa-twitter";
  public socialIcon3 = "fa-instagram";
  public socialIcon4 = "fa-github";
  public socialIcon5 = "fa-linkedin";


  public copyrightText = "&#169; Copyright " + environment.COMPANY_NAME + ". &#174; Is Registered In The U.S. Patent And Trademark Office.";

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onNavClick(link: string): void {
    if (link.indexOf('http') >= 0)
      window.open(link, '_blank');
    else
      this._router.navigate([link]);
  }


}
