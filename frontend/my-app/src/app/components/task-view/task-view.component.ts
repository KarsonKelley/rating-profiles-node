import { TaskService } from '../../service/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent {

  constructor(private taskService: TaskService) { }

  createNewList(){
    this.taskService.createList('testing list').subscribe((res: any) =>{
      console.log(res)
    })
  }
}
