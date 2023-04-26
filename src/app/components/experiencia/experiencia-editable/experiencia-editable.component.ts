import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-editable',
  templateUrl: './experiencia-editable.component.html',
  styleUrls: ['./experiencia-editable.component.css']
})
export class ExperienciaEditableComponent implements OnInit {
  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {

  }

  OnCreate(): void {
    const mExperiencia = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia);
    this.sExperiencia.save(mExperiencia).subscribe(
    { next: data=> {
      alert("Experiencia añadida");
    this.router.navigate(['home']);
    }, error: err => {alert("Fallo");
    this.router.navigate(['home']);
    }
    })
  }
}
