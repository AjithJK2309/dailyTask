import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-socket-table',
  templateUrl: './socket-table.component.html',
  styleUrls: ['./socket-table.component.css']
})
export class SocketTableComponent implements OnInit,OnDestroy {
  btn : boolean
  btn2 : boolean
  p: number = 1;
  data : any = []

  constructor(private _socket:SocketServiceService) { 
    this.btn = false
    this.btn2 = true
  }

  ngOnInit(): void {
    this._socket.getSocketData().subscribe((res:any)=>{
      this.data.push(res)
    })
  }

  reconnect(){ 
    this.btn = false
    this.btn2 = true
    this._socket.getSocketData().subscribe((res:any)=>{
      this.data.push(res)

      this._socket.sendMessage(res);
    })    
  }  

  disconnect(){    
    this.btn = true
    this.btn2 = false
    this._socket.disconnectSocket()  
  }

  connectionClose(){   
    this.btn2 = false
    this.btn = false
    this._socket.closeSocket()
  }

  ngOnDestroy(): void {
      this.connectionClose();
  }

}
