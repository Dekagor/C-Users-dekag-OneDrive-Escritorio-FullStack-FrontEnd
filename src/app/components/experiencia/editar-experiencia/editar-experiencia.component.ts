import { Component, ConstructorSansProvider, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: ExperienciaService, private activateRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
      this.sExperiencia.detail(id).subscribe(
        {
          next: data => {
            this.expLab = data;
        }, error:err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['home']);
    },
    })
  }

  OnUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      {next: data =>{
        this.router.navigate(['home']);
      },
      error:
        (err): void => {
        alert("Error al modificar experiencia");
        this.router.navigate(['home']);
      }
      }
    )
    console.log(this.expLab);
  }
}
