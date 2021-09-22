import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CountryService } from './country.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Array<any> = []

  constructor(private countryService: CountryService, private http: HttpClient) {

  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    })
  }

  onDeleteCountry(id: number) {
    if (confirm(`Are you sure to delete this country`)) {
      this.http.delete(`https://taskfrontendapi.azurewebsites.net/api/country/${id}`).subscribe((res: any) => {
        this.countryService.getCountries().subscribe(countries => {
          this.countries = countries;
        })

      })
    }

  }

}
