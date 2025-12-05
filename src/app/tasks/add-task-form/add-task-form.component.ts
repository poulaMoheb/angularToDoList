import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Input({ required:true }) userId! :string;
  @Output() isClosed = new EventEmitter<void>();
  @Output() enteredData = new EventEmitter<NewTask>();
  enteredTitle="";
  enteredSummary="";
  enteredDate="";  
  private taskService = inject(TasksService);
  onClose(){
    this.isClosed.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    },
    this.userId
  )
  this.isClosed.emit();
  }
}
