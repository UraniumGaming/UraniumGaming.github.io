import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-resources-healing',
    templateUrl: './resources-healing.component.html',
})
export class ResourcesHealingComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Healing';
    }
}
