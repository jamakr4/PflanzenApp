import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plant } from '../classes/plants';
import { PlantService } from '../services/plant.service';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-myplants-ownplant',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './myplants-ownplant.component.html',
  styleUrl: './myplants-ownplant.component.css'
})
export class MyplantsOwnplantComponent {
  plants:Plant[] = [];
  constructor(private plantService:PlantService){
    this.plants = this.plantService.getAll();
  }
  name = new FormControl("bob");
  nickname = new FormControl("Sebastian");
  size = new FormControl("20");
  age = new FormControl("20");
  category1 = new FormControl("20");
  category2 = new FormControl("20");
  water = new FormControl("20");
  maintenance = new FormControl("20");
  temperature = new FormControl("20");
  humidity = new FormControl("Low");
  sunlight = new FormControl("20");

  addPlant(){
    alert("test");
  const newPlant: Plant ={
    id: this.plantService.getNewId(),
    name: this.name.toString(),
    scientificName: "Ficus benjamina",
    price: 0,
    description: "To be added",
    inStock: false,
    category: [this.category1.toString(), this.category2.toString()],
    water: Number(this.water),
    toxicity: false,
    humidity: this.humidity.toString(),
    temperature: this.temperature.toString(),
    sunlight: this.sunlight.toString(),
    toughness: "undefined",
    tips: ["This is a custom plant!"],
    promotion: false,
    rating: NaN,
    bestseller: false,
    indoor: true,
    outdoor: false,
    maintenance: this.maintenance.toString(),
    expierience: "Intermediate",
    space: "Custom",
    purpose: "Decoration",
    petfriendly: false,
    allergyfriendly: false,
    imageUrl: ["/Ficus_benjamina1.png", "/Ficus_benjamina1.png", "/Ficus_benjamina1.png"],

    nickname: this.nickname.toString(),
    size: Number(this.size),
    age: Number(this.age),
    pinned: false
    }
    this.plantService.addToPlants(newPlant);
  }
  
}
