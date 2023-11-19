import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = 'https://bluewave-tech.de/contact.php';

  constructor(private httpClient: HttpClient) { }

  sendAnEmail(data: object): Observable<{}> {
    const headers = new HttpHeaders().append('Content-Type', 'application/JSON');
    return this.httpClient.post<any>(this.url, data, { headers: headers })
  }
}
