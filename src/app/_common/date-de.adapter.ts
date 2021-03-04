// inspired from https://stackblitz.com/edit/angular-material-datepicker-format?embed=1&file=app/date.adapter.ts
import {Injectable} from '@angular/core';
import {NativeDateAdapter} from '@angular/material/core';

@Injectable()
export class DateDeAdapter extends NativeDateAdapter {

  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
      const str = value.split('.');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return this._to2digit(day) + '.' + this._to2digit(month) + '.' + year;
    } else if (displayFormat === 'inputMonth') {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return  this._to2digit(month) + '.' + year;
    } else {
      return date.toDateString();
    }
  }

  getFirstDayOfWeek(): number {
    return 1;
  }

  private _to2digit(n: number): string {
    return ('00' + n).slice(-2);
  }
}

export const DATE_DE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: 'input',
    // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
    monthYearLabel: 'inputMonth',
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};
