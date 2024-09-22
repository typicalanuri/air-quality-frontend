import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.css']
})
export class AirqualityComponent {
  public city:FormGroup;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService){
    this.city = new FormGroup({
      cityName: new FormControl('', Validators.required),
      latest: new FormControl(Boolean, Validators.required)
    });
  }
  
  // ngOnInit(): void {
  //   this.city = this.formbuilder.group({
  //     cityName: [''],
  //     latest: ['false']
  //   });
  // }

  onSubmit(){
    this.apiService.getWithParams('/quality', this.city);
  }
}
