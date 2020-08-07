import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/globals';

@Component({
    selector: 'app-resources-suggestion-box',
    templateUrl: './resources-suggestion-box.component.html',
})
export class ResourcesSuggestionBoxComponent implements OnInit {
    constructor(
        private globals: Globals,
    ) {
    }

    ngOnInit(): void {
        this.globals.titleName = 'Suggestion Box';
    }
}
