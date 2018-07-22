import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MessageService } from 'app/services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AppService {
  constructor(public http: HttpClient,
  public messages: MessageService) { }

  // extracts information from service calls
  public extractData(res, msg = '') {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    console.log(body);
    if (msg !== '') { this.messages.add(msg); }
    return body || { };
  }

  // handles service call errors
  public handleError (error: any | any) {
    this.messages.add(error.message || error);
    return Observable.throw(error.status);
  }

  // return message for successfuly edits
  public passMessage(msg = '') {
    if (msg !== '') {
      this.messages.add(msg);
    }
  }
}
