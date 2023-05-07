import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-editable',
  templateUrl: './educacion-editable.component.html',
  styleUrls: ['./educacion-editable.component.css']
})

export class EducacionEditableComponent implements OnInit {
  educacion : Educacion = null;
  imageUrl: string;
  name: string;

  constructor(private educacionService: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    // public imageService: ImageService,
    private storage: Storage
    ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      {
        next: data =>{
          this.educacion = data;
          // this.getImages(this.educacion.imgE);
      }, error: err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // this.educacion.imgE = this.imageService.url;
    this.educacionService.update(id, this.educacion).subscribe(
      {
        next: data => {
          this.router.navigate(['']);
      }, error: err =>{
        alert("Error al modificar educacion ");
        this.router.navigate(['']);
      }
      }
    )
    console.log(id);
  }

  uploadImage($event: any) {
    const timestamp = new Date().getTime(); // obtener el timestamp actual
    const name = `educacion_${this.name}_${timestamp}`; // agregar el timestamp al nombre del archivo
    // this.imageService.uploadImage($event, name);
  }



  // getImages(name: string) {
  //   const imagesRef = ref(this.storage, `imagen`);
  //   list(imagesRef)
  //     .then(async response => {
  //       for(let item of response.items){
  //         this.imageUrl = await getDownloadURL(item);
  //       }
  //     })
  //     .catch(error => console.log(error))
  // }
}
