import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: NewPostComponent
  },
  {
    path: ':categoryName/:subcatName/:postTitle',
    component: ViewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
