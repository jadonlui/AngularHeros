import { Injectable } from '@angular/core';

/**
 * xxx-服務
 */
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
    localStorage.setItem('info', JSON.stringify(this.messages));
  }

  clear() {
    this.messages = [];
    localStorage.removeItem('info');
  }

  constructor() {}
}
