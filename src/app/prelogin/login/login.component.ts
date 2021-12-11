import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, public route:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      
    });
  }


/**
 * To submit login details
 */
  loginSubmit(){
    this.route.navigate(['/dashboard']); //
  }

  /**
   * To naviagte on register component
   */
  registerMe() {
    this.route.navigate(['/register']);
  }
}
