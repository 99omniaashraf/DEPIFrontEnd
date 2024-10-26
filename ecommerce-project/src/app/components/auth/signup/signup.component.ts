import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: SignupForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService) { }

  onSignup() {
    if (this.signupForm.password !== this.signupForm.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    this.authService.signup(this.signupForm).subscribe({
      next: (response) => {
        console.log('Account created successfully', response);
        // Handle successful signup (e.g., redirect to login)
      },
      error: (error) => {
        console.error('Account creation error', error);
        // Handle signup error
      }
    });
  }
}
