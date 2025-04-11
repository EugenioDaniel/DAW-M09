import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';  // Asegúrate de que esto esté importado
import { TaulaComponent } from './taula/taula.component.spec';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTableModule,TaulaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projecte-eugeni-2';
}
