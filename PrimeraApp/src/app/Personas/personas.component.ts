import { Component } from "@angular/core";
import { PersonaComponent } from "../persona/persona.component";

@Component({
    selector: 'app-personas', 
    templateUrl: './personas.component.html',
    standalone: true,
    imports: [PersonaComponent]
})
export class PersonasComponent{

}