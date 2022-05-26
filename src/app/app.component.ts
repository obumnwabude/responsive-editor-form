import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDrawer } from '@angular/material/sidenav';
import * as LogRocket from 'logrocket';
import { firstValueFrom } from 'rxjs';

import { EditorComponent } from './editor/editor.component';
import { Link } from './link';
import { LinksService } from './links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  isLargeScreen = false;

  constructor(
    breakpoint: BreakpointObserver,
    private bottomSheet: MatBottomSheet,
    private linksService: LinksService
  ) {
    breakpoint
      .observe('(min-width: 600px)')
      .subscribe((b) => (this.isLargeScreen = b.matches));
    LogRocket.init('bqia7u/responsive-editor-form');
  }

  openEditor(link: Link | null) {
    this.linksService.currentLink = link;

    if (this.isLargeScreen) {
      this.drawer.open();
    } else {
      const bsRef = this.bottomSheet.open(EditorComponent);
      const closeSub = bsRef.instance.cancel.subscribe((_) => bsRef.dismiss());
      firstValueFrom(bsRef.afterDismissed()).then(() => closeSub.unsubscribe());
    }
  }
}
