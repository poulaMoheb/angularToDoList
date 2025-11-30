import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";

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
  tasks =[
    {
      id:"t1",
      userId:"u2",
      title:"Learn Angular",
      summary:"Learn all the basics and the advanced features of angular & how to apply them.",
      dueDate:"2025-06-23",
    },  
    {
      id:"t2",
      userId:"u2",
      title:"Build First Demo",
      summary:"Build a fake website for a hyper market.",
      dueDate:"2025-05-21",
    },
    {
      id:"t3",
      userId:"u3",
      title:"Prepare your Template",
      summary:"Build a fake website for a hyper market.",
      dueDate:"2025-05-05",
    },
  ];
  get selectedUserArray(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }

  completeTask(taskId:string){
    this.tasks = this.tasks.filter(task=> task.id === taskId);
  }
  onAddTask(){
    this.isAddTask=true;

    console.log(this.isAddTask)
  }
  onCancelAddTask(){
    this.isAddTask=false;
  }
}
