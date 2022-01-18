import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.css']
})
export class ServiceTaskComponent implements OnInit {
  data : any = []
  constructor(private service:TaskServiceService) {
    this.data=service.arrayVal();
   }

  ngOnInit(): void {
  }

}
