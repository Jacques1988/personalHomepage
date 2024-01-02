import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = environment.contactformPath;
  sendedMail: Subject<boolean> = new Subject<boolean>();
  mailFrom = new BehaviorSubject("");
  clientMail = this.mailFrom.asObservable();
  constructor(private httpClient: HttpClient) { }

  setData(data: string) {
    this.mailFrom.next(data);
  }

  sendAnEmail(data: object): Observable<{}> {
    const headers = new HttpHeaders().append('Content-Type', 'application/JSON');
    return this.httpClient.post<object>(this.url, data, { headers: headers })
  }
}
