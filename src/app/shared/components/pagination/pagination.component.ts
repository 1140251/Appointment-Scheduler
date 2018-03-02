import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'underscore';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage;
  @Input() numberPages;
  @Output() onPrev = new EventEmitter<boolean>();
  @Output() onNext = new EventEmitter<boolean>();
  @Output() onPage = new EventEmitter<number>();
  private pages: number[];

  constructor() { }

  ngOnInit() {
    console.log('paginacao const: ' + this.numberPages);

    this.pages = _.range(1, this.numberPages + 1);
    console.log(this.currentPage);
    console.log(this.pages.toString());
  }

  loadPage(page: number) {
    this.onPage.emit(page);
  }

  prev(): void {
    this.onPrev.emit(true);
  }

  next(next: boolean): void {
    this.onNext.emit(next);
  }

}
