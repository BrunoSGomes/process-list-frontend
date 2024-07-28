import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { environment } from '../../environments/environment'
import { Process, ProcessHistory } from '../shared/interface/process.interface'

@Injectable({
  providedIn: 'root'
})
export class ProcessListService {
  constructor(private readonly http: HttpClient) {}

  public async processList(name?: string): Promise<Process[]> {
    const result = await lastValueFrom(
      this.http.get<Process[]>(
        `${environment.backend}/process-list?name=${name || ''}`
      )
    )
    return result
  }

  public async getProcessHistory(id: string): Promise<ProcessHistory> {
    const result = await lastValueFrom(
      this.http.get<ProcessHistory>(
        `${environment.backend}/get-process-history/${id}`
      )
    )
    return result
  }
}
