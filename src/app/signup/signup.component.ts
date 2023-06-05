import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  lostFocus = true;

  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

  }

  onSubmit() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      alert('Please fill out all fields');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.authService.register(user).subscribe(
      (response) => {
        alert('User created successfully');
        localStorage.setItem('currentUser', JSON.stringify(user)); // To Store user details in localStorage
        this.router.navigate(['/weather']);
      },
      () => {
        alert('Error occurred while registering user!');
      }
    );
  }
  
  onLoginClick() {
    this.router.navigate(['/login']);
  }
}
