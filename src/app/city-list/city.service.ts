import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"


@Injectable({ providedIn: "root" })
export class CityService {


  constructor(private http: HttpClient) { }



  getCountryCities(id: string): Observable<any> {
    return this.http.get(`https://taskfrontendapi.azurewebsites.net/api/city/getcities/${id}`)
  }

  getCityById(id: string): Observable<any> {
    return this.http.get(`https://taskfrontendapi.azurewebsites.net/api/city/${id}`)
  }

}
