import { Component, Input, OnInit , ViewEncapsulation} from "@angular/core";


@Component({
    selector : 'app-sample',
    templateUrl : './sample.component.html',
    styleUrls : ['./sample.component.css'],
     
})

export class Sample implements OnInit{

    @Input() parentData:any;
    
    tog = true;
    str : string = "";
    i:number=0;
    constructor()
    {
        this.str = "Ajith";
    }
    
    ngOnInit(): void {
        
        console.log("Component Initialized...");
        this.toggle();         
    }
   
    toggle()
    {
        this.tog = !this.tog;
        console.log(this.parentData);
    }
    ngOnDestroy()
    {
        console.log("Component Destroyed...");
    }
}