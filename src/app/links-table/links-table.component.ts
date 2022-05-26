import { Component, EventEmitter, Output } from '@angular/core';

import { Link } from '../link';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-links-table',
  templateUrl: './links-table.component.html',
  styleUrls: ['./links-table.component.scss']
})
export class LinksTableComponent {
  columns = ['edit', 'short', 'long'];
  @Output() edit = new EventEmitter<Link>();

  constructor(public linksService: LinksService) {}
}
