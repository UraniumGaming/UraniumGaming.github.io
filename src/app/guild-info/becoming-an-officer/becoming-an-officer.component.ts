import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-becoming-an-officer',
    templateUrl: './becoming-an-officer.component.html',
    styleUrls: ['./becoming-an-officer.component.scss'],
})
export class BecomingAnOfficerComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Become an Officer';
    }
}
