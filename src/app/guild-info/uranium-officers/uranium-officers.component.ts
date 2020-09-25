import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';
import { of } from 'rxjs';
import { OfficerData, OFFICER_DATA } from './uranium-officers.data';

@Component({
    selector: 'app-uranium-officers',
    templateUrl: './uranium-officers.component.html',
    styleUrls: ['./uranium-officers.component.scss'],
})
export class UraniumOfficersComponent implements OnInit {
    officers: OfficerData[] = OFFICER_DATA;

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
