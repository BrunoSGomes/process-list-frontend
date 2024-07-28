import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ProcessListService } from '../../services/process-list.service'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms'
import { Process } from '../../shared/interface/process.interface'
import { StatusPipe } from '../../shared/pipes/status.pipe'
import { debounceTime, Subject } from 'rxjs'
import { ProcessHistoryModalComponent } from './modal/process-history.component'

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
    StatusPipe
  ],
  templateUrl: './process-list.component.html',
  styleUrl: './process-list.component.scss'
})
export class ProcessListComponent implements OnInit {
  public displayedColumns: Array<keyof Process> = [
    'name',
    'status',
    'createdBy',
    'createdAt',
    'finishedAt',
    'id'
  ]
  public dataSource: Process[] = []
  public search = ''
  private searchSubject = new Subject<string | undefined>()

  constructor(
    private readonly dialog: MatDialog,
    private readonly processService: ProcessListService
  ) {
    this.searchSubject.pipe(debounceTime(500)).subscribe(async (name) => {
      this.dataSource = await this.processService.processList(name)
    })
  }

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.processService.processList()
  }

  public async getProcessList(name?: string): Promise<void> {
    this.searchSubject.next(name)
  }

  public openProcessHistory(id: string, name: string): void {
    this.dialog.open(ProcessHistoryModalComponent, { data: { id, name } })
  }
}
