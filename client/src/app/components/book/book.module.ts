import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(bookRoutes),
    SharedModule
  ],
  providers: []
})
export class BookModule {
}
