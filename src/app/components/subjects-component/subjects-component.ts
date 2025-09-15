import { Component, signal } from '@angular/core';
import { CardsComponent } from "../cards-component/cards-component";
import { ExercisesComponent } from "../exercises-component/exercises-component";
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-subjects-component',
  standalone: true,
  imports: [CardsComponent,
     ExercisesComponent,
     CommonModule,
     NgIf],
  templateUrl: './subjects-component.html',
  styleUrl: './subjects-component.css'
})
export class SubjectsComponent {
  activeTab = signal<'subjects' | 'exercises'>('subjects');

  setTab(tab: 'subjects' | 'exercises') {
    this.activeTab.set(tab);
  }
}

