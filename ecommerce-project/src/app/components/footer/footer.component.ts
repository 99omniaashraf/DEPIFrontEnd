import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-footer',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Include CommonModule for ngFor
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  footerStyle = {
    'background-color': '#e7c07d',
    'padding': '20px'
  };

  socialLinks = [
    {
      href: 'https://www.facebook.com',
      label: 'Visit our Facebook page',
      icon: 'fab fa-facebook-f',
      title: 'Facebook'
    },
    {
      href: 'https://www.twitter.com',
      label: 'Visit our Twitter page',
      icon: 'fab fa-twitter',
      title: 'Twitter'
    },
    {
      href: 'https://www.instagram.com',
      label: 'Visit our Instagram page',
      icon: 'fab fa-instagram',
      title: 'Instagram'
    },
    {
      href: 'mailto:your-email@gmail.com',
      label: 'Send us an email',
      icon: 'fas fa-envelope',
      title: 'Email'
    }
  ];
}
