import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-resources-tanking',
    templateUrl: './resources-tanking.component.html',
})
export class ResourcesTankingComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Tanking';
    }
}
