import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YlDatepickerComponent } from '../table/yl-datepicker/yl-datepicker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateValueAccessor} from "angular-date-value-accessor";



@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
