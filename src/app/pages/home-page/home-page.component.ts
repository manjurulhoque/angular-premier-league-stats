import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamResult } from 'src/app/models/team-mode';
import { RapidApiService } from 'src/app/services/rapid-api.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

    teams!: TeamResult[];
    teamSubscription!: Subscription;

    constructor(private rapidApiService: RapidApiService) { }

    ngOnInit(): void {
        this.getTeams();
    }

    ngOnDestroy(): void {
        this.teamSubscription?.unsubscribe();
    }

    getTeams(): void {
        this.teamSubscription = this.rapidApiService.getTeams()
            .subscribe((res: TeamResult[]) => {
                this.teams = res;
            })
    }

}
