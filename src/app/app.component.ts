import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'app/globals';
import { MenuItem } from 'app/shared/models/menu-item.model';

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
        {
            itemName: 'media',
            routerLink: '/media',
            itemText: 'Media',
        },
        {
            itemName: 'raiding',
            routerLink: '/raiding',
            itemText: 'Raiding',
            innerItems: [
                {
                    itemName: 'raiding-general',
                    routerLink: '/raiding',
                    itemText: 'Raiding Info',
                },
                {
                    itemName: 'raiding-strats',
                    routerLink: '/raiding/strats',
                    itemText: 'Raiding Strats',
                },
            ],
        },
        {
            itemName: 'guild-info',
            routerLink: '/guild-info',
            itemText: 'Guild Info',
            innerItems: [
                {
                    itemName: 'rules-and-policies',
                    routerLink: '/guild-info/rules',
                    itemText: 'Rules and Policies',
                },
                {
                    itemName: 'becoming-an-officer',
                    routerLink: '/guild-info/becoming-an-officer',
                    itemText: 'Becoming an Officer',
                },
                {
                    itemName: 'uranium-officers',
                    routerLink: '/guild-info/uranium-officers',
                    itemText: 'Uranium Officers',
                },
            ],
        },
        {
            itemName: 'resources',
            routerLink: '/resources',
            itemText: 'Resources',
            innerItems: [
                {
                    itemName: 'dps',
                    routerLink: '/resources/dps',
                    itemText: 'DPS',
                },
                {
                    itemName: 'healing',
                    routerLink: '/resources/healing',
                    itemText: 'Healing',
                },
                {
                    itemName: 'tanking',
                    routerLink: '/resources/tanking',
                    itemText: 'Tanking',
                },
                {
                    itemName: 'suggestion-box',
                    routerLink: '/resources/suggestion-box',
                    itemText: 'Suggestion Box',
                },
            ],
        },
        {
            itemName: 'join-uranium',
            routerLink: '/join-uranium',
            itemText: 'Join Uranium',
        },
    ];

    constructor(
        public globals: Globals,
        private router: Router,
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

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
