import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillComponent } from './components/skill/skill.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'acerca', component: AcercaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'skill', component: SkillComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
