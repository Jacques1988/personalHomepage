import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = 'https://bluewave-tech.de/contact.php';

  constructor() { }

  /* sendAnEmail(data: object) {
    const headers = new HttpHeaders().append('Content-Type', 'application/JSON');
    return this.httpClient.post<object>(this.url, data, { headers: headers })
  } */
}
