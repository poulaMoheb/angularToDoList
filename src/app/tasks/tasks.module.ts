import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// created components  
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";
import { SharedModule } from "../shared/card/shared.module";

@NgModule({
    declarations:[TaskComponent, TasksComponent, AddTaskFormComponent],
    exports:[TasksComponent, TaskComponent, AddTaskFormComponent],
    imports:[CommonModule, SharedModule, FormsModule]
})

export class TasksModule{}