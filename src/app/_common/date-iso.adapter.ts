// inspired from https://stackblitz.com/edit/angular-material-datepicker-format?embed=1&file=app/date.adapter.ts
import {NativeDateAdapter} from '@angular/material/core';

export class DateIsoAdapter extends NativeDateAdapter {

  private readonly SEPARATOR = '-';

  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf(this.SEPARATOR) > -1)) {
      const str = value.split(this.SEPARATOR);
      const year = Number(str[0]);
      const month = Number(str[1]) - 1;
      const date = Number(str[2]);
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
      return year + this.SEPARATOR  + this._to2digit(month) + this.SEPARATOR + this._to2digit(day);
    } else if (displayFormat === 'inputMonth') {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return  year + this.SEPARATOR + this._to2digit(month);
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

export const DATE_ISO_FORMATS = {
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
