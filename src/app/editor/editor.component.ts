import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { LinksService } from '../links.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  shortCtrl = new FormControl('', [
    Validators.pattern(/^(\w|\-)*$/),
    Validators.required
  ]);
  
  longCtrl = new FormControl('', [
    Validators.pattern(/^https:\/\//),
    Validators.required
  ]);

  linkForm = new FormGroup({ short: this.shortCtrl, long: this.longCtrl });

  @Output() cancel = new EventEmitter<boolean>();

  constructor(
    public linksService: LinksService,
    private snackBar: MatSnackBar
  ) {
    if (this.linksService.currentLink) {
      this.shortCtrl.setValue(this.linksService.currentLink.short);
      this.longCtrl.setValue(this.linksService.currentLink.long);
    }
  }

  deleteLink(): void {
    if (this.linksService.deleteLink()) {
      this.cancel.emit();
    }
  }

  saveLink(): void {
    if (this.linkForm.invalid) {
      this.snackBar.open('Please resolve all errors');
    } else {
      const currentLink = this.linksService.currentLink;
      if (currentLink) {
        currentLink.short = this.shortCtrl.value;
        currentLink.long = this.longCtrl.value;
      } else {
        this.linksService.createLink(this.linkForm.value);
      }
      this.snackBar.open('Link successfully saved');
      this.linksService.currentLink = null;
      this.cancel.emit();
    }
  }
}
