export class Team {
    code!: string
    country!: string
    founded!: Number
    id!: Number
    logo!: string
    name!: string
    national!: boolean
}

export class Venue {
    address!: string
    capacity!: Number
    city!: string
    id!: Number
    image!: string
    name!: string
    surface!: string
}

export class TeamResult {
    team!: Team
    venue!: Venue
}