import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  isAuth(): Observable<any> {
    console.log(this.baseUrl)
    return this.http.get(this.baseUrl);
  }
}
