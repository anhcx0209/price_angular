import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchGetComponent } from './search-get/search-get.component';

const routes: Routes = [
  {
    path: 'search_local',
    component: SearchGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
