import { Injectable } from "@angular/core";
import { type NewTask } from "./task/task.model";


@Injectable({ providedIn: 'root' })
export class TasksService{
    private tasks =[
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

    
    getUserTasks(userId:string){
        return this.tasks.filter((task)=> task.userId === userId)
    }

    addTask(task: NewTask, userId: string){
        this.tasks.push({
          id: new Date().getTime().toString(),
          userId:userId,
          title:task.title,
          summary:task.summary,
          dueDate:task.date,
          })
    }

    removeTask(id: string) {
        return this.tasks = this.tasks.filter(task=> task.id === id);
    }
}