import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { ProcessListService } from '../../../services/process-list.service'
import { CommonModule } from '@angular/common'
import { ProcessHistory } from '../../../shared/interface/process.interface'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-process-history-modal',
  templateUrl: 'process-history.component.html',
  styles: 'li {margin-top: 5px}',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class ProcessHistoryModalComponent implements OnInit {
  public processData: ProcessHistory = { id: '', processId: '', history: [] }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { id: string; name: string },
    private readonly processService: ProcessListService
  ) {}

  async ngOnInit(): Promise<void> {
    this.processData = await this.processService.getProcessHistory(this.data.id)
  }
}
