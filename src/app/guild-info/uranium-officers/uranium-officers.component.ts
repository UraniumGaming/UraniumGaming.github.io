import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';
import { DATA, OfficerData } from './uranium-officers.data';

@Component({
    selector: 'app-uranium-officers',
    templateUrl: './uranium-officers.component.html',
    styleUrls: ['./uranium-officers.component.scss'],
})
export class UraniumOfficersComponent implements OnInit {
    officers: OfficerData[] = DATA;

    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Your Officers';
    }

    resolveUrl(url: string): string {
        if (url) {
            return url;
        }
        return 'assets/officers/blank.jpg';
    }

    resolveDescription(officer: OfficerData): string {
        if (officer?.description) {
            return officer.description;
        }
        const pictureCheck: string = officer.imageUrl ? '' : 'or a picture ';
        return `Hi! My name is ${officer.name} and I didn't provide a description ${pictureCheck}for the website.`;
    }
}
