import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
@Input() conversation:any;
  @Input() userName!:string;
  message!:string;
  // user!:any;
  ngOnInit(): void {
    
    //  console.log(this.conversation.messages,"fd");
 
     
  }
  sendMessage(){
    this.conversation.messages.push({id:this.conversation.messages.length+1,body:this.message, me:this.userName})
    console.log(this.conversation.messages,"pushed data");
    this.message = '';
  }
}
