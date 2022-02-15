import { Component, OnInit } from '@angular/core';
import { Standing } from 'src/app/models/standing-model';
import { RapidApiService } from 'src/app/services/rapid-api.service';

@Component({
    selector: 'app-standings-page',
    templateUrl: './standings-page.component.html',
    styleUrls: ['./standings-page.component.scss']
})
export class StandingsPageComponent implements OnInit {

    allStandings: Array<Standing>;

    constructor(private rapidApiService: RapidApiService) { }

    ngOnInit(): void {
        this.getStandings();
    }

    getStandings(): void {
        this.rapidApiService.getStandings()
            .subscribe((res: Standing[]) => {
                this.allStandings = res;
            })
    }

    get standings(): Array<Standing> {
        return this.allStandings;
    }

}
