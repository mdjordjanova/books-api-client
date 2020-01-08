import { NgModule } from '@angular/core';
import { AuthorListComponent } from './author-list/author-list.component';
import { RouterModule } from '@angular/router';
import { authorRoutes } from './author.routing';

@NgModule({
  declarations: [
    AuthorListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(authorRoutes)
  ],
  providers: []
})
export class AuthorModule {
}
