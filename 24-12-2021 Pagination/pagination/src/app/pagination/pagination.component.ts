import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  image:any=[]
  count : number = 1
  preBtn:any = document.getElementById('pre-btn')
 
  indexVal : number = this.count;
  constructor() { }

  ngOnInit(): void {
    this.image=[
      "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1518557743312-e86ea8b29b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
]

  }
  getImage(i:number){
    
    this.count = i+1;
    console.log(this.count);
  }
  preFunc(){
    if(this.count>1 && this.count<=this.image.length)
    {
    this.count--;
    console.log(this.count)
    }
    // if(this.count==1){
    //   this.preBtn.disabled=true      
    // }
    // else if(this.count>1){
    //   this.preBtn.disabled=false      
    // }
  }
  nextFunc(){
    if(this.count>0 && this.count<=this.image.length-1)
    {
    this.count++;
    console.log(this.count)
    }
  }
  countAdd(){
    if(this.count==1 && this.image.length-3){
      this.count=this.count+3;

    }
  }

}
