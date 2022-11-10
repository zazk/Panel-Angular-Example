import { Injectable } from '@angular/core';
import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages:Message[] = []

  constructor() { }

  add( msg :string):void{
    this.messages.push({text:msg, id:0})
  }
  clear(){
    this.messages = []
  }
}
