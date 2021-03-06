import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookshelfComponent } from './bookshelf.component';


@NgModule({
  declarations: [BookshelfComponent],
  imports: [
    CommonModule,
    BookshelfRoutingModule
  ]
})
export class BookshelfModule { }
