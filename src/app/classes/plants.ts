export class Plant{
    id!: number;
    name!: any;
    scientificName!: String;
    price!: number;
    description!: String;
    inStock!: boolean;
    category!: any[];
    water!: number; //avg weekly need in ml
    toxicity!: boolean;
    humidity!: any;
    temperature!: any; // In Celcius
    sunlight!: any;
    toughness!: String;
    tips!: String[];
    promotion!: boolean;
    rating!: number;
    bestseller!: boolean; //For shop cat
    indoor!: boolean;
    outdoor!: boolean;
    maintenance!: any;
    expierience!: String;
    space!: String;
    purpose!: String;
    petfriendly!: boolean;
    allergyfriendly!: boolean;
    imageUrl!: String[];

    //For the my Plant Area
    nickname!: any;
    size!: any; //in cm
    age!: any; //in Months
    pinned!: boolean; 
    timeBetweenSessions!: number;
    waterTime!: Date;
    days!: number;
    hours!: number;
    minutes!: number;
    seconds!: number;
    wateramount!: number;
}
