import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() isClosed = new EventEmitter<void>();
  onClose(){
    this.isClosed.emit();
  }
}
