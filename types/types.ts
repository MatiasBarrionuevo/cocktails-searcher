export type Drink = {
    dateModified: Date;
    idDrink: number;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: string;
    strDrink: string;
    strDrinkAlternate: string;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strImageAttribution: string;
    strImageSource: string;
    [key:`strIngredient${number}`|`strMeasure${number}`]:string;
    strInstructions: string;
    strInstructionsDE: string;
    strInstructionsES: string
    strInstructionsFR: string
    strInstructionsIT: string;
    'strInstructionsZH-HANS': string;
    'strInstructionsZH-HANT': string;
    strTags: string;
    strVideo: string;
};

export type Drinks = Array<Drink>;

export type setDrinksType = {setDrinks:(drinks:Drinks)=>void};
