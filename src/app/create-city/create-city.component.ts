import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {

  countryId: any = ''

  constructor(private http: HttpClient, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.countryId = paramMap.get('countryId')
    })
  }

  onCreateCity(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const addedCity = { name: form.value.city, countryid: +this.countryId }
    this.http.post("https://taskfrontendapi.azurewebsites.net/api/city", addedCity).subscribe(res => {
      console.log(res)

      this.router.navigate([`/city/${this.countryId}`]);
    })
  }

}
