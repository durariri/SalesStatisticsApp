import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app-input-form', pathMatch: 'full' },
  { path: 'input-form', loadChildren: () => import('./input-form/input-form.module').then(m => m.InputFormPageModule) },
  { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
