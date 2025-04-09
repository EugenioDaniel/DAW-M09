import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  imports: [
    NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mat';
}
