import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/Services/form-data.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  formGroup: FormGroup;
  selectedPlan: string = '';
  isSelected = false;

  constructor(private formDataService: FormDataService, private router: Router) {
    this.formGroup = new FormGroup({
      plan: new FormControl('', (Validators.required))
    });
  }

  nextStep() {
    // save form data
    this.formDataService.savePlanFormData(this.selectedPlan);
    console.log(this.selectedPlan)

    this.router.navigate(['/add-ons']);
  }

  goback() {
    this.router.navigate(['']);
  }

  selectPlan(plan: string): void {
    this.selectedPlan = plan;
    this.formDataService.selectedPlan = plan;
    console.log(this.selectedPlan);
  }


  changeColor() {
    this.isSelected = !this.isSelected;
  }
}
