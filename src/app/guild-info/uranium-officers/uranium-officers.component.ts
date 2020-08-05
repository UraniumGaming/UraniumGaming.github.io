import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-uranium-officers',
    templateUrl: './uranium-officers.component.html',
    styleUrls: ['./uranium-officers.component.scss'],
})
export class UraniumOfficersComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Your Officers';
    }
}
