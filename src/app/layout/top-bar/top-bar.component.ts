import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
    templateUrl: './top-bar.component.html',
    selector: 'top-bar',
})
export class TopBarComponent {
    @Input() menuItems: MenuItem[];

    collapsed: boolean = false;

    @ViewChildren(NgbDropdown) dropdowns: QueryList<NgbDropdown>;

    closeDropdowns(): void {
        this.dropdowns.forEach(dropdown => dropdown.close());
    }
}
