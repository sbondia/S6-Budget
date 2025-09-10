import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal-info',
  imports: [MatButtonModule],
  templateUrl: './card-modal-info.component.html',
  styleUrl: './card-modal-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardModalInfoComponent {
  readonly dialog = inject(MatDialog);

  @Input() title:string = ''
  @Input() text:string = ''

  openDialog() {
    this.dialog.open(CardModalInfoDialog, {
      data: {
        title: this.title,
        text: this.text
      },
    });
  }
}

@Component({
  selector: 'card-modal-info-dialog',
  templateUrl: 'card-modal-info-dialog.html',
  imports: [MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardModalInfoDialog {
  data = inject(MAT_DIALOG_DATA);
}