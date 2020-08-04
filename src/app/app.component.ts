import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { NamedComponent } from 'src/app/shared/named.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string;

    menuItems: MenuItem[] = [
        {
            itemName: 'home',
            routerLink: '/home',
            itemText: 'Home',
        },
    ];

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
