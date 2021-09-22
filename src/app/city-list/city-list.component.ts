import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CityService } from './city.service'

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  countryId: any = ''
  cities: Array<any> = []

  constructor(public route: ActivatedRoute, public cityService: CityService, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.countryId = paramMap.get('countryId')
    })

    this.cityService.getCountryCities(this.countryId).subscribe((cities) => {
      this.cities = cities
    })
  }

  onDeleteCity(id: number) {
    if (confirm(`Are you sure to delete this country`)) {
      this.http.delete(`https://taskfrontendapi.azurewebsites.net/api/city/${id}`).subscribe((res: any) => {
        this.cityService.getCountryCities(this.countryId).subscribe(cities => {
          this.cities = cities;
        })

      })
    }
  }

}
