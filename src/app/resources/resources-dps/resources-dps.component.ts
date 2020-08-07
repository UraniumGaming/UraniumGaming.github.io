import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-resources-dps',
    templateUrl: './resources-dps.component.html',
})
export class ResourcesDpsComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'DPS';
    }
}
