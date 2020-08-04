import { Component } from '@angular/core';
import { NamedComponent } from 'src/app/shared/named.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string;

    activateRoute(component: any): void {
        if (this.isNamedComponent(component)) {
            this.title = component.getName();
        } else {
            this.title = 'Uranium Gaming';
        }
    }

    isNamedComponent(component: any): component is NamedComponent {
        return (component as NamedComponent).getName !== undefined;
    }
}
