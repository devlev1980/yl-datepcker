import {AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',date: '12-02-2021'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',date: '12-02-2021'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',date: '12-02-2021'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',date: '12-02-2021'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',date: '12-02-2021'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',date: '12-02-2021'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',date: '12-02-2021'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',date: '12-02-2021'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',date: '12-02-2021'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',date: '12-02-2021'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit,AfterContentChecked {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','date'];
  dataSource = ELEMENT_DATA;
  tableForm: FormGroup | undefined ;
  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef) {

  }
  ngAfterContentChecked() {
    this.cdr.detectChanges()
  }

  ngOnInit(): void {
    this.tableForm = this.fb.group({
      elements: this.fb.array([])
    });
    this.setElementsForm();
  }
  private setElementsForm(){
    const elementsControl = this.tableForm?.get('elements') as FormArray;
    this.dataSource.forEach((element)=>{
      elementsControl.push(this.setElementsFormArray(element))
    });
  }
  private setElementsFormArray(element: PeriodicElement){
    moment.locale('he')

    return this.fb.group({
      position: [element.position],
      name: [element.name],
      weight: [element.weight],
      symbol: [element.symbol],
      date: moment(element.date).format('DD/MM/YYYY')
    })
  }


  // onDateChange(event: MatDatepickerInputEvent<unknown, unknown | null>) {
  //   console.log(event.target.value);
  //   console.log(this.tableForm?.value.elements)
  // }

  onDate(event: unknown) {
    console.log(event)
    console.log(this.tableForm?.controls['elements']);

  }
}
