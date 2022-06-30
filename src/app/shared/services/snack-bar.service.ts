import {Injectable} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface Config {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  duration: number;
  panelClass: string | string[];
}

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  config: Config = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 5000,
    panelClass: ''
  }

  constructor(private _snackBar: MatSnackBar) {
  }

  showSuccess(text: string) {
    this.config.panelClass = 'snackbar-success';
    this.showSnackBar(text);
  }

  showInfo(text: string) {
    this.config.panelClass = '';
    this.showSnackBar(text);
  }

  showError(text: string) {
    this.config.panelClass = 'snackbar-error';
    this.showSnackBar(text);
  }

  showSnackBar(text: string) {
    this._snackBar.open(text, 'Close', this.config);
  }
}
