import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProxyService } from '../service/http-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private httpProxy: HttpProxyService) {

  }
  
  public getAsync(name): Observable<any> {
      let url: string = `getManufacturer/${name}`;
      return this.httpProxy.getAsync(url);
  }
  public listAsync(): Observable<any> {
      let url: string = `getManufacturer`;
      return this.httpProxy.getAsync(url);
  }
  public postAsync(object): Observable<any>{
      let url: string = `setManufacturer/`;
      return this.httpProxy.post(url,object);
  }

}
