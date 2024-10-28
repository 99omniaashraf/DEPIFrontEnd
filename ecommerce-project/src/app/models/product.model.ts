import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListingComponent } from '../components/product-listing/product-listing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductListingComponent  // استيراد المكون كـ Standalone Component
  ],
})
export class ProductModule { }
