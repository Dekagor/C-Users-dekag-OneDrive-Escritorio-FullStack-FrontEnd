import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaEditableComponent } from './components/experiencia/experiencia-editable/experiencia-editable.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'nuevaExperiencia', component:ExperienciaEditableComponent},
  {path: 'editarExperiencia/:id', component:EditarExperienciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
