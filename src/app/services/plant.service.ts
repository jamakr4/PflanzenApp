import { Injectable } from '@angular/core';
import { Plant } from '../interface/plants';
import { sample_plants } from '../plantData';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor() { }

  getAll():Plant[]
  {
    return sample_plants;
  }

  getAllPlantsBySearchTerm(searchTerm:string)
  {
    return this.getAll().filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getPlantByID(PlantId: string): Plant {
    const id = Number(PlantId); // Convert PlantId to number
    return this.getAll().find(Plant => Plant.id === id) ?? new Plant();
  }
}
