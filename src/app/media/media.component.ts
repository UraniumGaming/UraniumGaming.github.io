import { Component, OnInit } from '@angular/core';
import { NamedComponent } from 'src/app/shared/named.component';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, NamedComponent {
    ngOnInit(): void {
    }

    getName: () => string = () => 'Media';
}
