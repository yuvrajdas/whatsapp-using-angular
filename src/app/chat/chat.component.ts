import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
@Input() conversation:any;

  message!:string;
  user!:any;
  ngOnInit(): void {
    this.user = prompt()

    // console.log(this.conversation);
  }
  sendMessage(){
    let res= this.conversation.push(this.message)
    console.log(res);
    
  }
}
