import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/Services/form-data.service';


@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit{
  formGroup: FormGroup;
  selectedServices: string[] = [];

  constructor(private formDataService: FormDataService, private router: Router, private formBuilder: FormBuilder) {
    {
      this.formGroup = this.formBuilder.group({
        onlineService: [true],
        largerStorage: [false],
        customizableProfile: [false]
      });
    }
  }

  ngOnInit() {

  }

  toggleCheckbox(service: string) {
    const currentValue = this.formGroup.get(service)?.value;
    this.formGroup.get(service)?.setValue(!currentValue);
  }


  nextStep() {
    // save form data
    const formData = {
      onlineService: this.formGroup.get('onlineService')?.value,
      largerStorage: this.formGroup.get('largerStorage')?.value,
      customizableProfile: this.formGroup.get('customizableProfile')?.value,
      selectedServices: this.formDataService.updateSelectedServices(this.formGroup.value)
    };
    this.formDataService.saveAddOnsFormData(formData);

    this.router.navigate(['/summery']);
  }

  goback() {
    this.router.navigate(['/plan']);
  }

}
