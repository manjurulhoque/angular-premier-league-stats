import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TeamResult } from '../models/team-mode';

import { teams, standings } from '../fake-data';
import { Standing } from '../models/standing-model';

@Injectable({
    providedIn: 'root'
})
export class RapidApiService {

    constructor(private http: HttpClient) { }

    getTeams(): Observable<TeamResult[]> {
        // return this.http.get<TeamResult[]>('https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2021');
        return of(teams);
    }

    getStandings(): Observable<Standing[]> {
        return of(standings);
    }
}
