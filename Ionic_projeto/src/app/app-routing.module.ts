import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'fornecedores', loadChildren: './fornecedores/fornecedores.module#FornecedoresPageModule' },
  { path: 'edit-fornecedor', loadChildren: './edit-fornecedor/edit-fornecedor.module#EditFornecedorPageModule' },
  { path: 'edit-fornecedor/:id', loadChildren: './edit-fornecedor/edit-fornecedor.module#EditFornecedorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
