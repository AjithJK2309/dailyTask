import { Component ,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'task-1';
  str : string = "Dolore non maxime fuga harum quis voluptas";
  getStr : string = "";
  message : string = "";
  elementt  = document.getElementsByClassName('message') as HTMLCollectionOf<HTMLElement>;
  // getData(getValue : string) 
  // {
  //   this.getStr=getValue;
  //   if(this.getStr===this.str)
  //   {
  //     this.message = "Success...!";
  //     this.elementt[0].style.display="block";
  //   }else{
  //     this.message="";
  //     this.elementt[0].style.display="none";
  //   }
  // }
  ngOnChanges(): void {
      // this.getData(this.getStr);
  }
}
