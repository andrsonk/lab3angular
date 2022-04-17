import { Component, OnInit } from '@angular/core';
import { programs } from '../defaultPrograms';
import { Program } from '../typedefs';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  programs: Program[] = programs;
  selectedProgram: Program | null = programs[0];

  constructor() { }

  ngOnInit(): void {
  }

  closeSelected() {
    this.selectedProgram = null;
  }

  setSelected(program: Program) {
    this.selectedProgram = program;
  }
}
