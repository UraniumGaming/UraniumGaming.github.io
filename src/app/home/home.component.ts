import { Component } from '@angular/core';
import { NamedComponent } from 'src/app/shared/named.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements NamedComponent {
    getName: () => string = () => 'Uranium Gaming';
}
