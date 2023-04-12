import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }
  public infoFormData: any;
  public planFormData: any;
  public addOnsFormData: any;
  public selectedPlan: any;

  saveInfoFormData(formGroup: any) {
    this.infoFormData = formGroup;
  }

  savePlanFormData(formGroup: any) {
    this.planFormData = formGroup;
  }

  saveAddOnsFormData(formData: any) {
    this.addOnsFormData = formData;
  }
  setSelectedPlan(plan: string): void {
    this.selectedPlan = plan;
  }

  selectedServices: string[] = [];

  updateSelectedServices(formValue: any) {
    this.selectedServices = [];
    if (formValue.onlineService) {
      this.selectedServices.push('Online Service');
    }
    if (formValue.largerStorage) {
      this.selectedServices.push('Larger Storage');
    }
    if (formValue.customizableProfile) {
      this.selectedServices.push('Customizable Profile');
    }
    return this.selectedServices;
  }
}
