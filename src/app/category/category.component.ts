import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../typedefs';

const categoriesClassNames = {
  [Category.Cardio]: 'cardio',
  [Category.PowerTraining]: 'power-training',
  [Category.WeightLoss]: 'weightloss',
  [Category.Stretching]: 'stretching',
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  @Input() withLabel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  iconByCategory(category: Category) {
    switch (category) {
      case Category.WeightLoss:
        return "assets/antistonks.svg";
      case Category.PowerTraining:
        return "assets/stonks.svg";
      case Category.Stretching:
        return "assets/grow.svg";
      case Category.Cardio:
      default:
        return "assets/cardio.svg";
    }
  };

  classNameByCategory(category: Category) {
    return categoriesClassNames[category];
  }

  labelByCategory(category: Category) {
    switch (category) {
      case Category.PowerTraining:
        return 'Силовые тренировки';
      case Category.Stretching:
        return 'Растяжка';
      case Category.WeightLoss:
        return 'Потеря веса';
      case Category.Cardio:
      default:
        return 'Кардио';
    }
  }

}
