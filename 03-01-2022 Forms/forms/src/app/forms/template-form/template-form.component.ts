import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  regex = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/)
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(val:any){
    console.log(val);
    console.log(val.value)
    console.log(val.valid)
    let a = val.value.mobile
    console.log(this.regex.test(a))
  }
}
