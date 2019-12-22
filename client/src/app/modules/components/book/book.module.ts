import { NgModule } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routing';
import { SharedModule } from '../../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookAddComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(bookRoutes),
    SharedModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
