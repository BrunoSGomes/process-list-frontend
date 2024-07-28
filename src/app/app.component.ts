import { Component, LOCALE_ID } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import ptBR from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'

registerLocaleData(ptBR)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
