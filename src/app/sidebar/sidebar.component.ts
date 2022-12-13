import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Output() coversationClicked: EventEmitter<any> = new EventEmitter<any>();
  conversations:any[] =  [{
    message: "60639 Packers Lane",
    name: "Pia",
    time: "4:08 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:false},
      {id:1, body:'Hello world', time:'4:08', me:false},
      {id:1, body:'Hello world', time:'4:08', me:false},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:false},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "2877 Summerview Circle",
    name: "Constantine",
    time: "1:34 PM",
    messages:[
      {
        id: 1,
        me: false,
        time: "6:12 AM",
        body: "Happy Birthday....!"
      },
      {id:2, body:'Another message for you', time:'4:08', me:true},
      {id:3, body:'Hi', time:'4:08', me:true},
      {id:4, body:'Go to hell', time:'4:08', me:true},
      {id:5, body:'ok bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "55 Mallory Lane",
    name: "Leta",
    time: "12:37 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:false},
      {id:2, body:'How are you', time:'4:08', me:false},
      {id:3, body:'Thanks', time:'4:08', me:false},
      {id:4, body:'Good night', time:'4:08', me:false},
      {id:5, body:'Bye...!', time:'4:08', me:false},
     
    ]
  }, {
    message: "0052 North Avenue",
    name: "Priscilla",
    time: "6:47 AM",
    messages:[
      {
        id: 1,
        me: false,
        time: "3:57 AM",
        body: "Computers"
      },
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "863 Mcbride Place",
    name: "Cyndie",
    time: "10:11 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "0 High Crossing Drive",
    name: "Tatiana",
    time: "12:30 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "757 Gerald Crossing",
    name: "Fionna",
    time: "3:53 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "53 Bluestem Road",
    name: "Eada",
    time: "6:06 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "4 Ridge Oak Street",
    name: "Rorke",
    time: "9:50 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "62 Sage Court",
    name: "Monty",
    time: "9:13 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "9 Merrick Lane",
    name: "Lannie",
    time: "3:42 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "4 Arkansas Trail",
    name: "Kevina",
    time: "12:51 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "9 Kingsford Alley",
    name: "Adele",
    time: "6:51 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "79394 Transport Junction",
    name: "Christel",
    time: "9:53 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "164 Schlimgen Street",
    name: "Esmaria",
    time: "6:39 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "834 Shopko Circle",
    name: "Dorolice",
    time: "7:56 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "36424 Manitowish Way",
    name: "Theobald",
    time: "10:51 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "08 Messerschmidt Lane",
    name: "Hulda",
    time: "1:07 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "703 Basil Court",
    name: "Austin",
    time: "1:10 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "26 Carey Terrace",
    name: "Bernadene",
    time: "5:48 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "59877 Maywood Hill",
    name: "Lonna",
    time: "1:41 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "74 Farmco Center",
    name: "Doroteya",
    time: "8:20 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "8606 Di Loreto Way",
    name: "Saunders",
    time: "9:04 PM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "6 Green Ridge Place",
    name: "Grazia",
    time: "10:10 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }, {
    message: "8 Mitchell Hill",
    name: "Lynelle",
    time: "3:30 AM",
    messages:[
      {id:1, body:'Hello world', time:'4:08', me:true},
      {id:2, body:'How are you', time:'4:08', me:true},
      {id:3, body:'Thanks', time:'4:08', me:true},
      {id:4, body:'Good night', time:'4:08', me:true},
      {id:5, body:'Bye...!', time:'4:08', me:true},
    ]
  }]
  ngOnInit(): void {
  }

}
