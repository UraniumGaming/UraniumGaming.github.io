import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-raiding',
    templateUrl: './raiding.component.html',
    styleUrls: ['./raiding.component.scss'],
})
export class RaidingComponent {
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
