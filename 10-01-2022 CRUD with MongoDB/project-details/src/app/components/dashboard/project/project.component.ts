import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm : FormGroup
  constructor(private apiService : ApiServiceService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.projectForm=new FormGroup({
      project_Name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100),Validators.pattern( /^[a-zA-Z]{1}/)]),
      project_Details : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)])
    })
  }
  projectSubmit(){
    this.apiService.createProject(this.projectForm.value).subscribe(res=>{
      alert('Project Created');
    },err=>{
      alert('Project is not Submitted'+err)
    })
  }

  
}
