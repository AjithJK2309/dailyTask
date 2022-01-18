import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public service: StoreService) { }

  ngOnInit(): void {
  }


  sendMesageToChild(message:any){


    this.service.sendMessage(message)
  }
}
