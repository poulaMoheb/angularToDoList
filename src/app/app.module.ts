import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// created components 
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations:[AppComponent],

    bootstrap:[AppComponent, HeaderComponent, UserComponent],
    imports:[BrowserModule, SharedModule, TasksModule]
})
export class AppModule {

}