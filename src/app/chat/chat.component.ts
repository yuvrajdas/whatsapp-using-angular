import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
@Input() conversation:any;

  ngOnInit(): void {
    console.log(this.conversation);
  }
  submitMessage(){
    
  }
}
