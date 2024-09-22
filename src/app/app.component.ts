import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-air-quality';
  public city!:UntypedFormGroup;
  currentPage: string ='';
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

  setcurrentPage(data: string){
    console.log("Current Page: "+ data);
    this.currentPage = data;
  }
}
