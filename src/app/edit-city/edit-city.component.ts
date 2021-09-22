import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CityService } from '../city-list/city.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {

  private city: any = ''
  cityId: any = ''
  cityName: any = ''

  constructor(public route: ActivatedRoute, private cityService: CityService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.cityId = paramMap.get('cityId')
    })

    this.cityService.getCityById(this.cityId).subscribe((city: any) => {
      this.cityName = city.name
      this.city = city
    })
  }

  onEditCity(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const updatedCity = { id: +this.cityId, name: form.value.cityName, countryId: this.city.countryId }
    this.http.put("https://taskfrontendapi.azurewebsites.net/api/city", updatedCity).subscribe(res => {
      console.log(res)

      this.router.navigate([`/city/${this.city.countryId}`]);
    })
  }
}
