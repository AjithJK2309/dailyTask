import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class Sample2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
