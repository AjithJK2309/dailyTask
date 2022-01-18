import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  constructor() { }
  name : string = "Ajith";
  ngOnInit(): void {
  }

}
