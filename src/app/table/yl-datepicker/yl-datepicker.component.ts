import {Component, forwardRef, Input} from '@angular/core';
// @ts-ignore
import {ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
// @ts-ignore
import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {MAT_DATE_LOCALE} from "@angular/material/core";

const moment = _rollupMoment || _moment;


@Component({
  selector: 'yl-datepicker',
  templateUrl: './yl-datepicker.component.html',
  styleUrls: ['./yl-datepicker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> YlDatepickerComponent),
      multi: true
    },

  ],

})
export class YlDatepickerComponent implements ControlValueAccessor {
  @Input()
     _dateValue: unknown ; // notice the '_'

  @Input() title: string | undefined;

  constructor() {
    setTimeout(()=>{
      console.log(this._dateValue);

    },200)
  }
  get dateValue() {
    // return this._dateValue
    return moment(this._dateValue, 'DD/MM/YYYY');
  }

  set dateValue(val) {
    this._dateValue = val
    this._dateValue = moment(val).format('DD/MM/YYYY');
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<unknown, unknown | null>) {
    console.log(event.value);
    this.dateValue = event.value
    this.dateValue = moment(event.value, 'DD/MM/YYYY');
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = value
      this.dateValue = moment(value, 'DD/MM/YYYY');
    }
  }
  propagateChange = (_: any) => { };

  registerOnChange(fn:any) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }
}
