import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProcessListService } from '../../services/process-list.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];

@Component({
  selector: 'app-process-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
  ],
  templateUrl: './process-list.component.html',
  styleUrl: './process-list.component.scss',
})
export class ProcessListComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'test',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  search = '';

  constructor(private readonly processService: ProcessListService) {}
}
