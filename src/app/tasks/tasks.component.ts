import { NewTask } from './task/task.model';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddTask= false;
  @Input() selectedName: string | undefined;
  @Input({required:true}) userId!:string;
  
  constructor(private tasksService: TasksService){}
  get selectedUserArray(){
    return this.tasksService.getUserTasks(this.userId);
  }
  onAddTask(){
    this.isAddTask=true;
  }
  onCancelAddTask(){
    this.isAddTask=false;
  }
}
