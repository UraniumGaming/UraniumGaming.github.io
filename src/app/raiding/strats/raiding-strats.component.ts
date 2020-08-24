import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-raiding-strats',
    templateUrl: './raiding-strats.component.html',
    styleUrls: ['./raiding-strats.component.scss'],
    host: {
        class: 'd-flex flex-fill',
    },
})
export class RaidingStratsComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Raiding Strats';
    }
}
