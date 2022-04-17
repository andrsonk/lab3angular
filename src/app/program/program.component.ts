import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCompexityLabel } from '../helpers';
import { Program, ProgramComplexity } from '../typedefs';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  @Input() program!: Program; 
  @Input() isSelected!: boolean;
  @Output() setSelectedEvent = new EventEmitter<Program>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(program: Program) {
    this.setSelectedEvent.emit(program);
  }

  getComplexityLabel(complexity: ProgramComplexity) {
    return getCompexityLabel(complexity);
  }
}
