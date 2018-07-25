import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Response } from '@angular/http';

import { AppService } from 'app/services/app.service';
import { Instance } from 'app/interfaces/instance';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {
  url = 'http://127.0.0.1:5000/instances';

  constructor(private app: AppService) { }

  // Get all
  getAll(): Observable<Instance[]> {
    return this.app.http.get(this.url, { observe: 'response' })
      .pipe(map(res => this.app.extractData(res, 'Instances loaded successfully')))
      .pipe(catchError(error => this.app.handleError(error)));
  }
  //
  // // create
  // create(instance: Instance): Observable<Instance> {
  //   return this.http.post(this.url, instance)
  //     .pipe(map(res => this.extractData(res, 'Instance created successfully')))
  //     .pipe(catchError(error => this.handleError(error)));
  // }
  //
  // // fetch by id
  // getOne(id: number): Observable<Instance> {
  //   return this.http.get(this.url + '/' + id)
  //     .pipe(map(res => this.extractData(res)))
  //     .pipe(catchError(error => this.handleError(error)));
  // }
  //
  // // update
  // update(instance: Instance): Observable<Instance> {
  //   return this.http.put(this.url + '/' + instance.id, instance)
  //     .pipe(map(res => this.extractData(res, 'Instance updated successfully')))
  //     .pipe(catchError(error => this.handleError(error)));
  // }
  //
  // // delete. Returns http status code.
  // delete(id: number): Observable<void> {
  //   return this.http.delete(this.url + '/' + id)
  //     .pipe(map(res => this.passMessage('Instance deleted successfully')))
  //     .pipe(catchError(error => this.handleError(error)));
  // }
}
