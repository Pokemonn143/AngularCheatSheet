import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasComponent } from './Personas/personas.component';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonasComponent,PersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeraApp';
  saludo ='Saludos desde angular';
}
