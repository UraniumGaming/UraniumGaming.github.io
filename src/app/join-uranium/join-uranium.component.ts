import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-join-uranium',
    templateUrl: './join-uranium.component.html',
    styleUrls: ['./join-uranium.component.scss'],
    host: {
        class: 'd-flex flex-column flex-fill',
    },
})
export class JoinUraniumComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Join Uranium';
    }
}
