import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Program } from '../typedefs';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.css']
})
export class ProgramsListComponent implements OnInit {

  @Input() programs!: Program[];
  @Input() selectedProgram: Program | null = null;
  @Output() setSelectedEvent = new EventEmitter<Program>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(program: Program) {
    this.setSelectedEvent.emit(program);
  }
}
