import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  getCustomerList(config: any): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/loaddata.php?action=getMemberList&fromLimit=${config.pageIndex}&toLimit=${config.pageSize}`)
  }

  getItemETWList(config: any): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/loaddata.php?action=getListETW&flag=list&member=`)
  }

  getClaimList(config: any): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + `/loaddata.php?action=getListClaim&flag=list&member=`)
  }
}
