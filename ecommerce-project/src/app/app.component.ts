import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { FooterComponent } from './components/footer/footer.component';  // Import FooterComponent
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,  // AppComponent is standalone
  imports: [
    RouterOutlet,
    HomeComponent,
    ProductListingComponent,
    FooterComponent,  // Include FooterComponent here
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-project';
}
