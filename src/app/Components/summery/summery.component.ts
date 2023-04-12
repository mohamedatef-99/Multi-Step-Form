import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/Services/form-data.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit{
  formGroup: FormGroup;
  public infoFormData: any;
  public infoFormDataEmail: any;
  public infoFormDataPhone: any;
  public planFormData: any;

  selectedServices: string[];
  selectedPlan: any;

  constructor(private formDataService: FormDataService, private router: Router) {
    this.formGroup = new FormGroup({});
    this.infoFormData = this.formDataService.infoFormData.value.name;
    this.infoFormDataEmail = this.formDataService.infoFormData.value.email;
    this.infoFormDataPhone = this.formDataService.infoFormData.value.phoneNumber;
    this.planFormData = this.formDataService.planFormData.value;
    this.selectedServices = this.formDataService.selectedServices;

  }
  ngOnInit() {
    this.selectedPlan = this.formDataService.selectedPlan;
  }


  nextStep() {
    // save form data
    this.formDataService.saveAddOnsFormData(this.formGroup);

    this.router.navigate(['/success']);
  }

  goback() {
    this.router.navigate(['/add-ons']);
  }
}
