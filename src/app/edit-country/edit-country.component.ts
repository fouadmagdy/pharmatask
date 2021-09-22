import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { CountryService } from '../country-list/country.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

  private countryId: any = ''
  countryName: string = ''

  constructor(public route: ActivatedRoute, private countryService: CountryService, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.countryId = paramMap.get('id')
    })

    this.countryService.getCountryById(this.countryId).subscribe((country => {
      this.countryName = country.name
    }))
  }

  onEditCountry(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const addedCountry = { id: +this.countryId, name: form.value.country }
    this.http.put("https://taskfrontendapi.azurewebsites.net/api/country", addedCountry).subscribe(res => {
      console.log(res)

      this.router.navigate(['/country']);
    })
  }
}
