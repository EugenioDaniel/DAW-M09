import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/components/login/login.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';


const routes: Routes = [
  { path: '', redirectTo: 'acces', pathMatch: 'full' },
  { path: 'acces', component: LoginComponent },
  { path: '**', redirectTo: 'acces', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatIcon,MatToolbar,MatToolbarModule,MatIconModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
