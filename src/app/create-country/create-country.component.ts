import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.scss']
})
export class CreateCountryComponent {

  constructor(private http: HttpClient, private route: Router) { }

  onCreateCountry(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const addedCountry = { name: form.value.country }
    this.http.post("https://taskfrontendapi.azurewebsites.net/api/country", addedCountry).subscribe(res => {
      console.log(res)

      this.route.navigate(['/country']);
    })
  }

}
