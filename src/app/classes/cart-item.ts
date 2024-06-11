import { Plant } from "./plants";

export class CartItem
{
    constructor(public plant:Plant)
    {}
    quantity:number = 1;
    price: number = this.plant.price;
}