export class PartyItem {
    fname : string;
    lname: string;
    dish: string;
    dishtype: string;
    dishfeatures: any[];
    servings: string;
    id: number;
}

export class Potluck {
    id: number;
    name: string;
    items: PartyItem[] = [];
    hostemail: string;
    hostfname: string;
    hostlname: string;
    partydate: string;
    partytime: string;
    hostmessage: string;
}

export interface PartyItem {
    fname : string;
    lname: string;
    dish: string;
    dishtype: string;
    dishfeatures: any[];
    servings: string;
    id: number;
}

export interface Potluck {
    id: number;
    name: string;
    items: PartyItem[];
    hostemail: string;
    hostfname: string;
    hostlname: string;
    partydate: string;
    partytime: string;
    hostmessage: string;
}