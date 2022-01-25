import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imagePath : any
  imgURL : any
  constructor(private router:Router,private msg: NzMessageService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate([''])
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
    // const formData = new FormData();
    // formData.append(file.uid,file.name,file.type)
    // console.log(formData)
    // var reader = new FileReader();
    // this.imagePath = {file};
    // reader.readAsDataURL(this.imagePath); 
    // reader.onload = (_event) => { 
    //   this.imgURL = reader.result; 
    // }
    // console.log(this.imgURL)
    this.imgURL = file.name
  }

  

}
