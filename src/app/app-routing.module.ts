import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'bookshelf',
    loadChildren: () =>
      import('./bookshelf/bookshelf.module').then(m => m.BookshelfModule)
  },
  {
    path: 'reader',
    loadChildren: () =>
      import('./reader/reader.module').then(m => m.ReaderModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
