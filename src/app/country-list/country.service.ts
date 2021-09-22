import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"



@Injectable({ providedIn: "root" })
export class CountryService {


  constructor(private http: HttpClient) { }



  getCountries(): Observable<any> {
    return this.http.get("https://taskfrontendapi.azurewebsites.net/api/country")
  }

  getCountryById(id: string): Observable<any> {
    return this.http.get(`https://taskfrontendapi.azurewebsites.net/api/country/${id}`)
  }
}
