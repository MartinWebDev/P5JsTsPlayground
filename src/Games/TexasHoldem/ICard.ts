export interface ICardData {
    id: number;
    cardValue: number;
    cardSuit: string;
}

export interface ICard {
    cardData: ICardData;
}