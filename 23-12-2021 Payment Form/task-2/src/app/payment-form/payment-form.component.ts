import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }
  payeeName : string ="";
  paymentDate : any;
  paymentAmount : any;
  Height : any ;
  miles : any ;

  ngOnInit(): void {
  }
  paymentAmountt(val:any)
  {
    this.paymentAmount = val/61.06;
  }
  kiloMeter(val:any)
  {
    this.miles = val * 1.609347;
  }
  heightToInch(val:any){
    this.Height = val/2.54;
  }
}
