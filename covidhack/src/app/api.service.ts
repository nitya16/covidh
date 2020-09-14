import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

private url1 : string =  'https://api.rootnet.in/covid19-in/contacts';
private url2 : string = 'https://api.rootnet.in/covid19-in/notifications';
private url3 : string = 'https://api.rootnet.in/covid19-in/hospitals/beds';
private url4 : string = 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges';
private url5 : string = '';



  constructor(private http: HttpClient) { }

getContact()
{
  return this.http.get(this.url1);
}

getNotify()
{
  return this.http.get(this.url2);
}

getBed()
{
  return this.http.get(this.url3);
}

getCollege()
{
  return this.http.get(this.url4);
}



}
