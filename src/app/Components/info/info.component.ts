import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/Services/form-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  formGroup: FormGroup;
  public name: string = ''
  public email: string = ''
  public phoneNumber: string = ''

  constructor(private formDataService: FormDataService, private router: Router,  private fb: FormBuilder) {
  this.formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?[0-9]{1,3}[-. ]??\d{9}$/)])
  });
}
  ngOnInit(): void {
    
  }

nextStep() {
  // save form data
  this.formDataService.saveInfoFormData(this.formGroup);
  console.log(this.formGroup.value)

  this.router.navigate(['/plan']);
}





// currentStep: 'info' | 'plan' | 'add-ons' | 'summary' = 'info';

//   goToNextStep() {
//     switch (this.currentStep) {
//       case 'info':
//         this.currentStep = 'plan';
//         break;
//       case 'plan':
//         this.currentStep = 'add-ons';
//         break;
//       case 'add-ons':
//         this.currentStep = 'summary';
//         break;
//       default:
//         break;
//     }
//   }

//   submitForm() {
//     if (this.formGroup.invalid) {
//       return;
//     }
//     console.log('Info step form submitted', this.formGroup.value);
//     this.goToNextStep();
//   }
}
