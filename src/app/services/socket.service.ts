import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socketClient:any;
  constructor() {
    this.socketClient = io.connect('http://localhost:3000/')

    this.socketClient.on("connect_error", (err:any) => {
      console.log(`connect_error due to ${err.message}`);
    });
   }

   listen(eventName:string):Observable<any>{
    return new Observable((subscriber)=>{
      this.socketClient.on(eventName, (data:any)=>{

      })
    })
   }
}
