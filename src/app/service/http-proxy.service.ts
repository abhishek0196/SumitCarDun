import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {
  private apiBaseUrl: string = environment.dev.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getAsync(url: string): Observable<any> {

    let headers = this.getHeaders();

    return this.http.get(`${this.apiBaseUrl}/${url}`,{headers:headers});

  }

  public post(url: string, postData: any, params?: any): Observable<any> {
    if (params != undefined) {
      var options = this.prepareOptions(params);
      return this.http.post(`${this.apiBaseUrl}/${url}`, postData, options);
    } else {
      let headers = this.getHeaders();
      return this.http.post(`${this.apiBaseUrl}/${url}`, postData, { headers: headers });
    }
  }
  public put(url: string, postData: any, params?: any): Observable<any> {

    if (params != undefined) {
      var options = this.prepareOptions(params);
      return this.http.put(`${this.apiBaseUrl}/${url}`, postData, options);
    } else {
      let headers = this.getHeaders();
      return this.http.put(`${this.apiBaseUrl}/${url}`, postData, { headers: headers });
    }
  }

  public delete(url: string): Observable<any> {
    let headers = this.getHeaders();
    return this.http.delete(`${this.apiBaseUrl}/${url}`, { headers: headers });
  }

  public patch(url: string, postData?: any, params?: any): Observable<any> {
    if (params != undefined) {
      var options = this.prepareOptions(params);
      return this.http.patch(`${this.apiBaseUrl}/${url}`, postData, params);
    } else {
      let headers = this.getHeaders();
      return this.http.patch(`${this.apiBaseUrl}/${url}`, postData, { headers: headers });
    }
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    // headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers = headers.append('Access-Control-Allow-Methods', 'GET');
    // headers = headers.append('Ocp-Apim-Subscription-Key', environment.dev.subscriptionKey);
    return headers
  }

  private prepareOptions(params?: any): any {
    params = params;
    let headers = this.getHeaders();
    return { headers, params };
  }
}