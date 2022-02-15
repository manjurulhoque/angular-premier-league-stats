export class Team {
    id: number;
    name: string;
    logo: string;
}

export class Goals {
    for: number;
    against: number;
}

export class All {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goals;
}


export class Home {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goals;
}


export class Away {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goals;
}

export class Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: All;
    home: Home;
    away: Away;
    update: string;
}