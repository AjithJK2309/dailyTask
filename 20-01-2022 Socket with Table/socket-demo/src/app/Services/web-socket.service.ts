import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // subject : any
  // socketDatas : any=[]
  // uri : string = 

  // constructor() {
  //   this.subject = webSocket(this.uri)
  //  }

  // connection():Observable<any>{
  //   var sockets :any
  //   this.subject.subscribe((msg : any)=>{
  //     // console.log(msg)          
  //     this.socketDatas = msg
  //   },(err:any)=>{
  //     console.log(err)
  //   })
  //   return this.socketDatas
  // }

  // disconnect(){
  //   return this.subject.complete();
   
  // }

  // closeConnection(){
  //   return this.subject.unsubscribe((msg : any)=>{
  //     console.log(msg);
  //   },(err:any)=>{
  //     console.log(err);
  //   });
  // }

  // emit(eventName:any,data:any){
  //   this.subject.emit(eventName,data)
  // }

}
