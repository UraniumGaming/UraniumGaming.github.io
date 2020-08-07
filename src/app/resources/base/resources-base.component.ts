import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-resources-base',
    templateUrl: './resources-base.component.html',
})
export class ResourcesBaseComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Resources';
    }
}
