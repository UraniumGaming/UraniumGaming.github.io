import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
    activateRoute(component: any): void {
        if (this.isOnInit(component)) {
            // tslint:disable-next-line:no-lifecycle-call
            component.ngOnInit();
        }
    }

    isOnInit(component: any): component is OnInit {
        return (component as OnInit).ngOnInit !== undefined;
    }
}
