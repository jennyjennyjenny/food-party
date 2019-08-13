export interface PartyItem {
    fname : string;
    lname: string;
    dish: string;
    dishtype: string;
    dishfeatures: any[];
    servings: string;
    id: number;
}

export interface GroupItems {
    dishtype: string;
    items: PartyItem[];
}