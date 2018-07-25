import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { MessageService } from 'app/services/message.service';
import { SpinnerService } from 'app/services/spinner.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

// @Injectable()
export class AppService {
  constructor(public http: HttpClient,
    public messages: MessageService,
    private spinnerService: SpinnerService) { }

  data: any;

  // extracts information from service calls
  public extractData(res, msg = '') {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    if (msg !== '') { this.messages.add(msg); }
    if (res.body instanceof Array) {
      this.data = res.body.map(i => JSON.parse(i));
    } else {
      this.data = res.body;
    }
    this.spinnerService.display(false);
    return this.data || {};
  }

  // handles service call errors
  public handleError(error) {
    this.messages.add(error.message || error);
    this.spinnerService.display(false);
    return throwError(error.status);
  }

  // return message for successfuly edits
  public passMessage(msg = '') {
    if (msg !== '') {
      this.messages.add(msg);
    }
    this.spinnerService.display(false);
  }
}
