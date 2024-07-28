import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'finished') return 'Finalizado'
    if (value === 'running') return 'Em andamento'
    if (value === 'started') return 'Iniciado'
    return 'Criado'
  }
}
