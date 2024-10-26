import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: LoginForm = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  onLogin() {
    this.authService.login(this.loginForm).subscribe({
      next: (response) => {
        console.log('Logged in successfully', response);
        // Handle successful login (e.g., redirect, store token)
      },
      error: (error) => {
        console.error('Error logging in', error);
        // Handle login error
      }
    });
  }
}
