import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private mailChimpEndpoint =
    'https://gmail.us8.list-manage.com/subscribe/post-json?u=d1d4d61c222c5120f554c6ca3&amp;id=1a6048a792&c=ng_jsonp_callback_0';
  constructor(private http: HttpClient) {}
  public subscribeToList(data) {
    console.log('data', data);
    const params = new HttpParams()
      .set('EMAIL', data.email)
      .set('b_d1d4d61c222c5120f554c6ca3_1a6048a792', ''); // hidden input name

    const mailChimpUrl = this.mailChimpEndpoint + params.toString();

    return this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c');
  }
}
