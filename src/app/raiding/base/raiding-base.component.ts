import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-raiding-base',
    templateUrl: './raiding-base.component.html',
    styleUrls: ['./raiding-base.component.scss'],
})
export class RaidingBaseComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Raiding';
    }
}
