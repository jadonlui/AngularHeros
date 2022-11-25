import { Injectable } from '@angular/core';

/**
 * 點擊後出現在下方的訊息
 */
@Injectable({
  providedIn: 'root', //綁在root上面，原本寫在app.module
})
export class MessageService {
  messages: string[] = [];

  /**
   * 新增訊息
   * 將訊息push進去messages[]
   * 以id為‘info'存入localstorage
   */
  add(message: string) {
    this.messages.push(message);
    localStorage.setItem('info', JSON.stringify(this.messages));
  }

  /**
   * 清空message[]
   * 清空'info'這個id的storage
   */
  clear() {
    this.messages = [];
    localStorage.removeItem('info');
  }

  constructor() {}
}
