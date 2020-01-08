import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  providers: []
})
export class BookModule {
}
