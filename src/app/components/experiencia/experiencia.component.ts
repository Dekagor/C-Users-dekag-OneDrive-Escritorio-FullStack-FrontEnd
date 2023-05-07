import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { JsonService } from 'src/app/service/json-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  mExperiencia: Experiencia[] = [];
  isLogged = false;
  datos : any = {};



  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService, private jsonService: JsonService) { }


  ngOnInit(): void {
      this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

  cargarExperiencia(): void{
      this.sExperiencia.lista().subscribe(
        {
          next: data =>{this.mExperiencia = data;
          }
        });
    }
  delete(id?: number) {
    this.sExperiencia.delete(id).subscribe(
      {
        next: data =>{
          this.cargarExperiencia();
      }, error: err =>{
        alert("No se pudo borrar la experiencia");
      }
    });
  }
}
