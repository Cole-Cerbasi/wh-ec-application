import { Component, Input, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() id!: string;
  @Input() title: string;
  @Input() new_price: string;
  @Input() old_price: string;
  @Input() pre_image: string;
  @Input() link_star: string;

  constructor(private el: ElementRef){

    const nativeElement = this.el.nativeElement;
    console.log(`Unique element created! ${this.id}`);

    this.title = "Item";
    this.new_price = "0.00";
    this.old_price = "0.00";
    this.pre_image = "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
    this.link_star = "5";
  }
}
