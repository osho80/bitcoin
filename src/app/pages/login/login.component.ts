import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  model = new User;

  submitted = false;

  onSignup(name){
    console.log('Signup: ', name);
    
  }

  onSubmit(form: NgForm){
    console.log('form value: ', form.value);
    this.submitted = true;
    console.log('Submitted: ', this.model);
    this.userService.signUp(this.model)
    this.router.navigate(['/home'])
    
    
  }

}
