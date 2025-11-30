export interface Task {
  id:string;
  summary:string;
  userId:string;
  title:string;
  dueDate:string;
}

export interface NewTask {
  title:string; 
  summary:string; 
  date:string;
}