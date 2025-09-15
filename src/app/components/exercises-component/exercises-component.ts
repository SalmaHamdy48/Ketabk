import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { SingleChoiceCardComponent } from '../single-choice-card-component/single-choice-card-component';
import { MultipleChoiceCardComponent } from '../multiple-choice-card-component/multiple-choice-card-component';
import { TextCardComponent } from '../text-card-component/text-card-component';


@Component({
  selector: 'app-exercises-component',
  standalone: true,
  imports: [
    DragDropModule,
    CommonModule,
    SingleChoiceCardComponent,
    MultipleChoiceCardComponent,
    TextCardComponent
  ],
  templateUrl: './exercises-component.html',
  styleUrl: './exercises-component.css'
})
export class ExercisesComponent {
  questionTypes = ['اختيار فردي', 'اختيار من متعدد', 'نص'];
  droppedQuestions: string[] = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      const item = event.previousContainer.data[event.previousIndex];
      this.droppedQuestions.push(item);
    }
  }
}

