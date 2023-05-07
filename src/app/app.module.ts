import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaEditableComponent } from './components/experiencia/experiencia-editable/experiencia-editable.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducacionEditableComponent } from './components/educacion/educacion-editable/educacion-editable.component';
import { EducacionNuevaComponent } from './components/educacion/educacion-nueva/educacion-nueva.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    LoginButtonComponent,
    ExperienciaEditableComponent,
    EditarExperienciaComponent,
    EducacionNuevaComponent,
    EducacionEditableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
