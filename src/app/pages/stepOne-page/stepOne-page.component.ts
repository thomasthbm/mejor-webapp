import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Ui } from '../../utils/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepOne-page',
  templateUrl: './stepOne-page.component.html',
  providers: [Ui, DataService]
})
export class StepOnePageComponent implements OnInit {
  public form: FormGroup;
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])]
    });
  }

  ngOnInit() { }

  checkEmail() {
  }

  submit() {
    localStorage.setItem('_email', this.form.value.email);

    this.dataService
      .checkUser(this.form.value)
      .subscribe(result => {
        if(result.email){
          localStorage.setItem('_name', result.name);
          localStorage.setItem('_userId', result._id);
          this.router.navigateByUrl('/stepthree');
        }else{
          this.router.navigateByUrl('/steptwo');
        }
      }, error => {
        let data = JSON.parse(error._body);
        this.errors = data;
      });
  }

}
