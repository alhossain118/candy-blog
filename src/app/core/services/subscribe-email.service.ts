import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  mailChimpEndpoint = 'https://gmail.us8.list-manage.com/subscribe/post?u=d1d4d61c222c5120f554c6ca3&amp;id=1a6048a792';
  constructor(
    private http: HttpClient
  ) { }
  subscribeToList(data) {
    const params = new HttpParams()
      .set('FNAME', data.firstName)
      .set('LNAME', data.lastName)
      .set('EMAIL', data.email)
      .set('group[24413][128]', 'true')
      .set('b_b736eb9e9077236cbd681a53b_4b66a82360', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}

