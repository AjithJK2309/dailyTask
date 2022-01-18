import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() parentData=new String()
  receivedData =new Array<any>();
  receivedData2 = new Array<any>() ;
  getStr : string = '';
  score : number = 0;
  percent : number = 0;
  message : string = '';
  element = document.getElementsByClassName('color') as HTMLCollectionOf<HTMLElement>;
  // element2 = document.getElementsByClassName('result') as HTMLCollectionOf<HTMLElement>;
  element3 = document.getElementsByClassName('message') as HTMLCollectionOf<HTMLElement>;
  constructor() { }
  
  ngOnInit(): void {
    for(let i=0;i<this.parentData.length;i++)
    {
      this.receivedData.push(this.parentData.charAt(i));
      this.receivedData2.pop();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    
    this.element[0].style.color = "green";
    
  }
  pageRefersh()
  {
    window.location.reload();
  }
  // pageResult()
  // {
  //   for(let i=0;i<this.receivedData.length;i++)
  //   {
  //     if(this.receivedData[i]==this.receivedData2[i])
  //     {
  //       this.element[0].style.color="green";
  //       this.score+= 1;
  //     }else
  //     {
  //       this.element[0].style.color="red";
  //     }
  //   }
  //   this.percent = (this.score/42)*100;
  //   if(this.score < 20){
  //     this.element2[0].style.color = "red";
  //   }
  //   else{
  //     this.element2[0].style.color = "green";
  //   }
  //   this.element2[0].style.display = "block";
  // }


  getData(getValue : any){
    this.getStr=getValue;
    if(this.getStr==this.parentData)
    {
      this.message = "Success...!";
      this.element3[0].style.display="block";
    }else{
      this.message="";
      this.element3[0].style.display="none";
    }
    this.receivedData2.push(this.getStr.charAt(this.getStr.length-1))
    for(let i=0;i<this.receivedData.length;i++){
      if(this.receivedData[i]==this.receivedData2[i]){
        this.element[i].style.color="green";
      }
      else{
        this.element[i].style.color="red";
      }
    }
  }
}
