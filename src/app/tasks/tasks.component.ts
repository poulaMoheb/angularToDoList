import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
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
