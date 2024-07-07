export class Plant{
    id!: number;
    name!: String;
    scientificName!: String;
    price!: number;
    description!: String;
    inStock!: boolean;
    category!: String[];
    water!: number; //avg weekly need in ml
    toxicity!: boolean;
    humidity!: String;
    temperature!: String; // In Celcius
    sunlight!: String;
    toughness!: String;
    tips!: String[];
    promotion!: boolean;
    rating!: number;
    bestseller!: boolean; //For shop cat
    indoor!: boolean;
    outdoor!: boolean;
    maintenance!: String;
    expierience!: String;
    space!: String;
    purpose!: String;
    petfriendly!: boolean;
    allergyfriendly!: boolean;
    imageUrl!: String[];

    //For the my Plant Area
    nickname!: String;
    size!: number; //in cm
    age!: number; //in Months
    pinned!: boolean; 
}