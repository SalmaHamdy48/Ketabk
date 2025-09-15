import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 👈 ده مهم
import { DragDropModule, CdkDragStart } from '@angular/cdk/drag-drop';
import { SingleChoiceCardComponent } from "../single-choice-card-component/single-choice-card-component";
import { MultipleChoiceCardComponent } from "../multiple-choice-card-component/multiple-choice-card-component";
import { TextCardComponent } from "../text-card-component/text-card-component";


@Component({
  selector: 'app-exercises-component',
  standalone: true,
  imports: [SingleChoiceCardComponent, MultipleChoiceCardComponent, TextCardComponent, DragDropModule, CommonModule, FormsModule],
  templateUrl: './exercises-component.html',
  styleUrl: './exercises-component.css'
})
export class ExercisesComponent {
  questionTypes = ['اختيار فردي', 'اختيار من متعدد', 'نص'];
  droppedTypes: string[] = [];

  onDrop(type: string) {
    // أضف النوع للمصفوفة
    this.droppedTypes.push(type);
    console.log('تم إدراج السؤال:', type);
  }
}

