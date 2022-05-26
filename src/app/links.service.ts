import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

import { Link } from './link';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  currentLink: Link | null = null;

  private _links: Link[] = [];

  get links(): Observable<Link[]> {
    return of(this._links);
  }

  constructor(private snackBar: MatSnackBar) {}

  createLink(link: Link): void {
    link.id = this._links.length.toString();
    this._links.push(link);
  }

  deleteLink(): boolean {
    if (this.currentLink) {
      const index = this._links.findIndex((l) => l.id === this.currentLink!.id);
      this._links.splice(index, 1);
      this.snackBar.open('Link successfully deleted');
      return true;
    } else {
      this.snackBar.open('Current Link is null');
      return false;
    }
  }
}
