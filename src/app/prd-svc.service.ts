import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PrdSvc {

  TtlVar="Dream Products"
  PrdAryVar=[
    {
      "TtlVak":"BoaT Air Dopes",
      "DtlVak":"Boat White Color Tiny Portavle Pods",
      "AmtVak": 3000,
      "ImgVak": "assets/boat.webp"
    },
    {
      "TtlVak":"Redmi 9 Prime",
      "DtlVak":"Old Specs for budget",
      "AmtVak": 9999,
      "ImgVak": "assets/boat.webp"
      
    },
    {
      "TtlVak":"Puma White Sneakers",
      "DtlVak":"Casual Shoes for Daily Use",
      "AmtVak": 2500,
      "ImgVak": "assets/boat.webp"
    },
    {
      "TtlVak":"Mechanical keyboard",
      "DtlVak":"Makes wonderful sounds",
      "AmtVak": 1200,
      "ImgVak": "assets/boat.webp"
    },
    
    {
      "TtlVak":"Apple Series 7 watch",
      "DtlVak":"The best Smart watch on the planet",
      "AmtVak": 42000,
      "ImgVak": "assets/boat.webp"
    }
    


  ]

  constructor() { }

  getItemByPath(PathPsgVar:string){
    console.log("Step 1", this.PrdAryVar.find(PrdItmVar=> PrdItmVar.TtlVak.toLowerCase().split(" ").join('-')==PathPsgVar))
     return this.PrdAryVar.find(PrdItmVar=> PrdItmVar.TtlVak.toLowerCase().split(" ").join('-')==PathPsgVar)
  }
}
