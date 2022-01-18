import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Idata } from '../Idata.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form : FormGroup
  public tableData:Idata[]
  public updateId:any 
  addBtn : boolean = true
  updateBtn : boolean = false
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required)
    })
    this.getTableData();

  }
  subBtn(){
    this.addBtn = true
    this.updateBtn = false
  }
  submitData(){
    this.apiService.postData(this.form.value).subscribe(res=>{
    alert('data inserted');
    this.form.reset();
    let close= document.getElementById('close');
    close?.click();
    this.getTableData();
  },
    err=>{alert('Data not inserted...!Something Wrong')})    
  }

  getTableData(){
    this.apiService.getData().subscribe(res=>{
      this.tableData=res
    },err=>{alert("Data is not received...!")})
  }

  editData(data:any){
    this.updateBtn = true
    this.addBtn = false
    this.updateId = data.id
    this.form.controls['name'].setValue(data.name);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['age'].setValue(data.age);
    this.form.controls['mobile'].setValue(data.mobile);
  }

  updateData(){
    this.apiService.updateData(this.updateId,this.form.value).subscribe(res=>{
      alert('Data is updated');      
      this.getTableData();
      let close= document.getElementById('close');
      close?.click();
    },err=>{alert('Data is not updates...!')})
  }

  deleteData(data:any){
    this.apiService.deleteData(data.id).subscribe(res=>{
      alert('Data is deleted');
      this.getTableData();
    },err=>{alert('Data is not deleted...!')})
  }
}
