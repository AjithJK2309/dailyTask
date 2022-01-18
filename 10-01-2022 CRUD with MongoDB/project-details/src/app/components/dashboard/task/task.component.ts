import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  taskForm : FormGroup
  constructor(private apiService : ApiServiceService,private cookie:CookieService) { 
   
  }

  ngOnInit(): void {
    this.taskForm=new FormGroup({
      task_Name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern( /^[a-zA-Z]{1}/)]),
      task_Details : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      project_Name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern( /^[a-zA-Z]{1}/)]),
      createdAt : new FormControl('',Validators.required)
    })
  }
  taskSubmit(){
    console.log(this.taskForm.value)
    this.apiService.createTask(this.taskForm.value).subscribe(res=>{
      alert("Submitted")
    },err=>{
      alert("Task not submitted"+err)
    })
  }
  
}
