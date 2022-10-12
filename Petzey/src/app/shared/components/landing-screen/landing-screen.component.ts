import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MsalService } from '@azure/msal-angular';
import { b2cPolicies,isIE } from '../../../app-config';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  form: any = {
    username: null,
    password: null
  };


  isLoginFailed:boolean=false;
  errorMessage: any;

  cmd: boolean = true;

  constructor(private fb:FormBuilder,private authService:MsalService) { }

  ngOnInit(): void {
  }

  display()
  {

  }

  nav()
  {

  }

  onSubmit()
  {

  }

  login() {

    if (isIE) {

    this.authService.loginRedirect();

    } else {

    this.authService.loginRedirect();

    }
  }

    // logout()
    // {
    //   this.authService.logout();
    // }

}


