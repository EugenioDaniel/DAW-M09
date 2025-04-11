import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Empleat {
  id: number;
  name: string;
  surname: string;
  department: string;
  salary: number;
}

const EMPLEATS_DATA: Empleat[] = [
  { id: 1, name: 'John', surname: 'Doe', department: 'IT', salary: 55000 },
  { id: 2, name: 'Jane', surname: 'Smith', department: 'HR', salary: 45000 },
  { id: 3, name: 'Jack', surname: 'Johnson', department: 'Sales', salary: 65000 },
  { id: 4, name: 'Jill', surname: 'Williams', department: 'Marketing', salary: 75000 },
  { id: 5, name: 'Jim', surname: 'Brown', department: 'Operations', salary: 55000 },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-taula',  // Cambié el nombre del selector para seguir la convención
  styleUrls: ['./taula.component.css'],
  templateUrl: './taula.component.html',
  imports: [MatTableModule]
})
export class TaulaComponent {
  displayedColumns: string[] = ['id', 'name', 'surname', 'department', 'salary'];
  dataSource = EMPLEATS_DATA;
}