import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-guild-info-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Rules and Policies';
    }
}
