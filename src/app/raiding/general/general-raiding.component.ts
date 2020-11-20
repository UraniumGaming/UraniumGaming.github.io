import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-raiding-base',
    templateUrl: './general-raiding.component.html',
    styleUrls: ['./general-raiding.component.scss'],
    host: {
        class: 'd-flex flex-fill',
    },
})
export class GeneralRaidingComponent implements OnInit {
    activeItem: 'schedule' | 'expectations' | 'loot';

    constructor(
        private globals: Globals,
        public route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Raiding';
    }
}
