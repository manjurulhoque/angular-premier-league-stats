import { Component, Input, OnInit } from '@angular/core';
import { TeamResult } from 'src/app/models/team-mode';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() teamResult: TeamResult | undefined;

    constructor() { }

    ngOnInit(): void {
    }

}
