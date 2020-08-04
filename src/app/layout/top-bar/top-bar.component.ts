import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
    selector: 'top-bar',
})
export class TopBarComponent {
    @Input() menuItems: MenuItem[];

    collapsed: boolean = true;

    @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

    closeDropdowns(): void {
        this.dropdowns.forEach(dropdown => dropdown.close());
    }
}
