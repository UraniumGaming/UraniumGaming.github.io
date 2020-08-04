import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
    templateUrl: './top-bar.component.html',
    selector: 'top-bar',
})
export class TopBarComponent {
    @Input() menuItems: MenuItem[];

    collapsed: boolean = false;
}
