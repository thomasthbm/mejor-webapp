import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Ui } from '../../utils/ui';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-stepThree-page',
  templateUrl: './stepThree-page.component.html',
  providers: [DataService, Ui, DatePipe]
})
export class StepThreePageComponent implements OnInit {
  public form: FormGroup;
  public name: string = '';
  public availableDates = [];
  public scheduledDates = [];
  public schedule = {};
  public errors: any[] = [];

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService,
    private router: Router, private datePipe: DatePipe) {
    this.form = this.fb.group({
      selectDates: ['', Validators.compose([
        Validators.required,
        CustomValidator.SelectValidator
      ])]
    });

    this.name = localStorage.getItem('_name');
  }

  ngOnInit() {

    localStorage.removeItem('_selectedDate');
    let select = document.getElementById('selectDateControl');

    this.dataService.getAvailableDates()
      .subscribe(result => {
        this.availableDates = result;
        if (result.length == 0) {
          select.setAttribute('disabled', 'disabled');
          this.showModal();
        } else {
          select.removeAttribute('disabled');
        }
      }, error => {
        let data = JSON.parse(error._body);
        this.errors = data;
      });
  }

  showModal() {
    this.ui.setActive('modal');
  }

  hideModal() {
    this.ui.setInactive('modal');
    this.router.navigateByUrl('/');

  }

  submit() {

    this.schedule = {
      calendar: (this.form.value).selectDates,
      user: localStorage.getItem('_userId'),
    };

    this.dataService.createSchedule(this.schedule).subscribe(result => {
      this.router.navigateByUrl('/finish');
    }, error => {
      let data = JSON.parse(error._body);
      this.errors = data;
    });
  }

  onChange(deviceValue) {
    localStorage.setItem('_selectedDate', deviceValue);
  }

}
