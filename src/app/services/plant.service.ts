import { Injectable } from '@angular/core';
import { Plant } from '../classes/plants';
import { sample_plants } from '../plantData';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private currentId = 14;
  private ownedPlant: number[] = [1,2,5];

  //wishlist
  private wishlist: number[] = [];

  constructor() { }

  getAll():Plant[]
  {
    return sample_plants;
  }

  getAllPlantsBySearchTerm(searchTerm:string)
  {
    return this.getAll().filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getPlantByID(PlantId: string): Plant  {
    const id = Number(PlantId); 
    return this.getAll().find(Plant => Plant.id === id) ?? new Plant();
  }

  addToPlants(plant: Plant): void{
    alert("2");
    sample_plants.push(plant);
    this.addToMyplants(plant.id);
  }

  getNewId(): number{
    this.currentId++;
    return this.currentId;
  }

  getOwnedPlants(): Plant[] {
    const ownedPlants: Plant[] = [];
    this.ownedPlant.forEach(plantId => {
    const plant = this.getPlantByID(plantId.toString());
    
    ownedPlants.push(plant);
      });
    return ownedPlants; 
   }
  addToMyplants(plantId:number): void {
    this.ownedPlant.push(plantId);
  }

  removeFromMyplants(plantId:number): void {
    for(let i = 0; i < this.ownedPlant.length; i++){
      if(plantId == this.ownedPlant[i]){
        this.ownedPlant.splice(i, 1);
        return;
      }
    }
  }
  
  //wishlist
  addToWishlist(plantId: number): void {
    if (!this.wishlist.includes(plantId)) {
      this.wishlist.push(plantId);
    }
  }

  removeFromWishlist(plantId: number): void {
    this.wishlist = this.wishlist.filter(id => id !== plantId);
  }

  getWishlist(): Plant[] {
    const wishlistPlants: Plant[] = [];
    this.wishlist.forEach(plantId => {
      const plant = this.getPlantByID(plantId.toString());
      wishlistPlants.push(plant);
    });
    return wishlistPlants;
  }

  }
