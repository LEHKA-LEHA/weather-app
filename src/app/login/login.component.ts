import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  message = '';
  lostFocus = false;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.message = 'Please fill in both email and password fields.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          localStorage.setItem('user', JSON.stringify({ email: this.email }));
          alert('Logged in successfully!');
          window.location.href = '/weather';
        } else {
          this.message = 'Invalid email or password!';
        }
      },
      () => {
        this.message = 'Error occurred while logging in!';
      }
    );
  }
}  
