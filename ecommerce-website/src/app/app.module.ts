import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
