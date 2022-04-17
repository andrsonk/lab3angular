import { Component, Input, OnInit } from '@angular/core';
import { Category, Exersize } from '../typedefs';

@Component({
  selector: 'app-exersize',
  templateUrl: './exersize.component.html',
  styleUrls: ['./exersize.component.css']
})
export class ExersizeComponent implements OnInit {

  @Input() exersize!: Exersize;

  completed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

   exersizeColorClass(category: Category) {
    switch (category) {
      case Category.Cardio:
      default:
        return 'cardio';
      case Category.PowerTraining:
        return 'power-training';
      case Category.Stretching:
        return 'stretching';
      case Category.WeightLoss:
        return 'weightloss';
    }
  }
}
