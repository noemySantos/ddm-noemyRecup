import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-pacientes', loadChildren: './lista-pacientes/lista-pacientes.module#ListaPacientesPageModule' },
  { path: 'novo-perfil-modal', loadChildren: './novo-perfil-modal/novo-perfil-modal.module#NovoPerfilModalPageModule' },
  { path: 'dados-detail', loadChildren: './dados-detail/dados-detail.module#DadosDetailPageModule' },
  { path: 'paciente-modal', loadChildren: './paciente-modal/paciente-modal.module#PacienteModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
