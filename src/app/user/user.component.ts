import { Component ,EventEmitter,Input, Output } from '@angular/core';


interface User {
  name:string;
  avatar:string;
  id:string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Output() selected = new EventEmitter();



get imagePath(): string {
    return "../../assets/users/" + this.user.avatar;
}
  onUserClick() {
    this.selected.emit(this.user.id); 
  }
}
