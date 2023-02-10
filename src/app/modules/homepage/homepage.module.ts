import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from 'src/app/shared/modules/blog/blog.component';
import { SearchBarComponent } from 'src/app/shared/modules/search-bar/search-bar.component';
// import { SearchBxComponent } from 'src/app/shared/modules/search-bx/search-bx.component';
import { SearchBxComponent } from 'src/app/shared/modules/search-bx/search-bx.component'; 
import { LoadingSpinnerComponent } from 'src/app/shared/modules/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BlogComponent,
    SearchBarComponent,
    SearchBxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
