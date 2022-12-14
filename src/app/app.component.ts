import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(http:SocketService){}
  
  user:any;
  ngOnInit(): void {
    
    this.user = prompt()
  }
  conversation!: any;
  onConversationSelected(conversation:any) {
    // console.log(conversation);
    this.conversation = conversation;
  }
}
