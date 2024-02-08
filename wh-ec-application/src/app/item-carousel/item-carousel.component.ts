import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './item-carousel.component.html',
  styleUrl: './item-carousel.component.css'
})
export class ItemCarouselComponent {

  @Input() id!: string;

  carousel_items = [
    {
      title: "Test Item 1",
      new_price: "0.00",
      old_price: "0.00",
      pre_image: "",
      link_star: "5"
    },
    {
      title: "Test Item 2",
      new_price: "0.00",
      old_price: "0.00",
      pre_image: "",
      link_star: "4"
    }
  ];

  cardSets: any[][] = [];

   constructor() {
     this.splitIntoSetsOfFour();
   }

   private splitIntoSetsOfFour() {
     for (let i = 0; i < this.carousel_items.length; i += 4) {
       this.cardSets.push(this.carousel_items.slice(i, i + 4));
     }
   }

}
