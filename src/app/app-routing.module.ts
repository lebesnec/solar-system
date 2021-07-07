import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SceneComponent} from './scene/scene.component';

const routes: Routes = [
  { path: '**', component: SceneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
