import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket'


@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  uri : any = 'wss://stream.binance.com:9443/ws/btcusdt@ticker'
  socket : any  
  sub : any

  private subject = new  Subject<string>();

  constructor() {    
    this.socket = webSocket(this.uri); 
   }

  getSocketData():Observable<any>{
    let observable;
    return this.sub = new Observable(sub=>{
      this.socket.subscribe((res:any)=>{
        sub.next(res);
      },(err:any)=>{
        console.log("Socket Closed..."+err)
      })
  });
  }

  disconnectSocket(){
    this.sub = this.socket.complete();
  }

  closeSocket(){
    this.sub = this.socket.unsubscribe();
  }

  sendMessage(socketData:any){
    this.subject.next(socketData);

  }

  reacveMessage():Observable<string>{

    return this.subject.asObservable();

  }
}
