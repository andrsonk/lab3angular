import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCompexityLabel } from '../helpers';
import { Program, ProgramComplexity } from '../typedefs';

@Component({
  selector: 'app-selected-program',
  templateUrl: './selected-program.component.html',
  styleUrls: ['./selected-program.component.css']
})
export class SelectedProgramComponent implements OnInit {

  @Input() selectedProgram!: Program;
  @Output() closeSelectedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getComplexityLabel(complexity: ProgramComplexity) {
    return getCompexityLabel(complexity);
  }

  closeSelected() {
    this.closeSelectedEvent.emit();
  }
}
