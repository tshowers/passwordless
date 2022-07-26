import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public headingText = "Contact Us";

  public COMPANY_NAME = environment.COMPANY_NAME;

  public firstName: string = '';
  public lastName: string = '';
  public emailAddress: string = '';
  public message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {

  }

}
