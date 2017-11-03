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
        Validators.minLength(1),
        Validators.maxLength(4),
        Validators.required
      ])],

      weight: ['', Validators.compose([
        // Validators.minLength(5),
        // Validators.maxLength(160),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.dataService.createUser(this.form.value).subscribe(result => {
      localStorage.setItem('_name', this.form.value.name);
      localStorage.setItem('_userId', result.user);
      this.router.navigateByUrl('/stepthree');
    }, error => {
      let data = JSON.parse(error._body);
      this.errors = data;
    });
  }

  preventNumbers(e) {    
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) > -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

}
