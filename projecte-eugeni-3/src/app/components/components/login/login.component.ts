import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  imports: [MatLabel,MatFormField,ReactiveFormsModule,MatIconModule,MatToolbarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulari: FormGroup;
  carregant = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    // Configura el formulario reactivo con validaciones
    this.formulari = this.fb.group({
      usuari: ['', Validators.required],
      contra: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  acces() {
    const usuari = this.formulari.value.usuari;
    const contra = this.formulari.value.contra;

    if (usuari === 'iocdawm9' && contra === 'ioc@dmin-123') {
      this.acces_tauler();
    } else {
      this.missatge_error();
      this.formulari.reset();
    }
  }

  acces_tauler() {
    // Accedemos al tauler
    this.carregant = true;
    setTimeout(() => {
      // Redirigimos al tauler después de 1 segundo
      this.router.navigate(['tauler']);
    }, 1000);
  }

  missatge_error() {
    // Mostramos un mensaje de error
    this._snackBar.open('Error en dades d´accés', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
