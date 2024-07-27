import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProcessListService {
  constructor(private readonly http: HttpClient) {}

  public async listProcess(name?: string): Promise<any> {
    const result = await lastValueFrom(
      this.http.get<any>(`${environment.backend}/customer/get-profile`)
    )
    return result
  }

  public async getProcessHistory(id: string): Promise<any> {
    const result = await lastValueFrom(
      this.http.get<any>(`${environment.backend}/customer/get-profile`)
    )
    return result
  }
}
