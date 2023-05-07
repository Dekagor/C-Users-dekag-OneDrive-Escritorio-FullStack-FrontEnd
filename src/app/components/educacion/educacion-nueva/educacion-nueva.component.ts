import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-nueva',
  templateUrl: './educacion-nueva.component.html',
  styleUrls: ['./educacion-nueva.component.css']
})

export class EducacionNuevaComponent implements OnInit {
  tituloE: string;
  descripcionE: string;
  imgE: string;
  anioE: string;
  educacion : Educacion = null;
  imageUrl: string;
  name: string;
  

  constructor(private educacionService: EducacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.descripcionE, this.anioE, this.imgE, this.tituloE);
    this.educacionService.save(educacion).subscribe(
      {
        next: data=>{
          alert("Educacion añadida");
          this.router.navigate(['']);
      }, error: err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
      }
    )
  }
}

