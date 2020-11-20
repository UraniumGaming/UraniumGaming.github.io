import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'app/globals';

@Component({
    selector: 'mythic-raiding',
    templateUrl: './mythic-raiding.component.html',
    host: {
        class: 'd-flex flex-fill',
    },
})
export class MythicRaidingComponent implements OnInit {
    activeItem: 'abilities' | 'attitude' | 'availability' | 'requirements' | 'feedback' | 'apply';

    constructor(
        private globals: Globals,
        public route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Mythic Team';
    }
}
