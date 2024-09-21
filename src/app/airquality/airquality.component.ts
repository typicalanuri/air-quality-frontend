import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from '../services/api/api.service';
@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.css']
})
export class AirqualityComponent implements OnInit{
  public city!:UntypedFormGroup;

  constructor(private formbuilder: UntypedFormBuilder, private apiService: ApiService){}
  
  ngOnInit(): void {
    this.city = this.formbuilder.group({
      cityName: [''],
      latest: ['false']
    });
  }

  onSubmit(){
    this.apiService.getWithParams('/quality', this.city);
  }
}
