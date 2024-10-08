import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  // Team members data
  teamMembers = [
    { name: 'Omnia Ashraf', role: 'Founder and Lead Artisan' },
    { name: 'Hussein', role: 'Expert in Pottery Design and Glazing' },
    { name: 'Aliaa', role: 'Specialist in Handcrafting and Detailing' },
    { name: 'Shihab', role: 'Lead Potter and Kiln Master' },
    { name: 'Ahmed', role: 'Creative Director and Product Innovator' },
    { name: 'Abdullah', role: 'Marketing and Customer Relations' }
  ];

  // Pottery tools data
  potteryTools = [
    'Potter\'s Wheels',
    'Carving Tools',
    'Rib Tools',
    'Glazes'
  ];

  // Mission statement
  mission = 'Our mission is to deliver unique and high-quality pottery that reflects craftsmanship and creativity, combining modern techniques with traditional values.';
}
