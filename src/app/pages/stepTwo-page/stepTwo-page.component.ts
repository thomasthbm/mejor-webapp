import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Ui } from '../../utils/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepTwo-page',
  templateUrl: './stepTwo-page.component.html',
  providers: [DataService, Ui]
})
export class StepTwoPageComponent implements OnInit {
  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService, private router: Router) {
    this.form = this.fb.group({
      email: [localStorage.getItem('_email'), Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],

      name: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],

      birthDate: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],

      localization: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],

      height: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],

      weight: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {

    this.dataService.createUser(this.form.value).subscribe(result => {
      this.router.navigateByUrl('/stepthree');
    }, error => {
      let data = JSON.parse(error._body);
      this.errors = data;
    });
  }

}
