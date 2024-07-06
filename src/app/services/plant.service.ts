import { Injectable } from '@angular/core';
import { Plant } from '../classes/plants';
import { sample_plants } from '../plantData';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private ownedPlant: number[] = [1,2,5];

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
  
  }
