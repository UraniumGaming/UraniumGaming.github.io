import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-guild-info',
    templateUrl: './guild-info.component.html',
    host: {
        class: 'd-flex flex-fill mb-3',
    },
})
export class GuildInfoComponent {
    activateRoute(component: OnInit): void {
        if (this.isOnInit(component)) {
            // tslint:disable-next-line:no-lifecycle-call
            component.ngOnInit();
        }
    }

    isOnInit(component: any): component is OnInit {
        return (component as OnInit).ngOnInit !== undefined;
    }
}
