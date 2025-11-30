import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {

  @Output() isClosed = new EventEmitter<void>();
  @Output() enteredData = new EventEmitter<NewTask>();
  enteredTitle="";
  enteredSummary="";
  enteredDate="";  
  onClose(){
    this.isClosed.emit();
  }

  onSubmit(){
    this.enteredData.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }
}
