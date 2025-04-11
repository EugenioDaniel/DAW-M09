import { Routes } from '@angular/router';
import { LoginComponent } from './components/components/login/login.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
    // Ruta por defecto: redirige a la ruta de acceso
    { path: '', redirectTo: 'acces', pathMatch: 'full' },

    // Ruta para el login, carga el LoginComponent
    { path: 'acces', component: LoginComponent },

    // Ruta para el tauler (dashboard), carga el TaulerModule
    {
        path: 'tauler',
        loadChildren: () => import('./taula/taula.component.spec').then(m => m.TaulaComponent)
    },

    // Ruta comodín para redirigir cualquier ruta no encontrada al login
    { path: '**', redirectTo: 'acces', pathMatch: 'full' }
];
