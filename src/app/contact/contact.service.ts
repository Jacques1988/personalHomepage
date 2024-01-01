import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = environment.contactformPath;

  constructor(private httpClient: HttpClient) { }

  sendAnEmail(data: object): Observable<{}> {
    const headers = new HttpHeaders().append('Content-Type', 'application/JSON');
    return this.httpClient.post<any>(this.url, data, { headers: headers })
  }
}
