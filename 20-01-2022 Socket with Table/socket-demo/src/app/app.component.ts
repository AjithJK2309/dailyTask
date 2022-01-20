import { Component, OnInit,OnDestroy } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { WebSocketService } from './Services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'socket-demo';
  btn : boolean
  btn2 : boolean
  p: number = 1;
  data : any =[]
  uri : string = 'wss://stream.binance.com:9443/ws/btcusdt@ticker'
  subject : any

  constructor(private socket:WebSocketService){
    this.subject = webSocket(this.uri)
    this.btn = false
    this.btn2 = true
  }

  ngOnInit(): void {
  this.subject.subscribe((msg:any)=>{
      this.data.push(msg)
    },(err:any)=>{
      console.log("Socket is Closed..."+err)
    })  
      
  }

  reconnect(){ 
    this.subject.subscribe((msg:any)=>{
      this.btn = false
      this.data.push(msg)      
    })
  }

  disconnect(){    
    this.btn = true
    this.subject.complete()    
  }

  connectionClose(){   
    this.btn2 = false
    this.btn = false
    this.subject.unsubscribe()
  }

  ngOnDestroy(): void {
      this.subject.unsubscribe()
  }
  
}
