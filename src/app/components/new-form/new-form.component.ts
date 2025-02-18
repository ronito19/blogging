import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-new-form',
  imports: [FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {
  newNews: INews = { title: "", url: "", texto: "", fecha: new Date(), tipo: ""}
  @Output() catchNew: EventEmitter<INews> = new EventEmitter();

  // Validacion
  isValid(): boolean {
    return (
      this.newNews.title.trim() !== "" &&
      this.newNews.url.trim() !== "" &&
      this.newNews.texto.trim() !== "" &&
      this.newNews.tipo.trim() !== "" 
    );
  }

  // Funcion para enviar los datos del formulario
  onSubmit(): void {
    console.log('Noticias enviadas desde el formulario:', this.newNews)
  }


  saveNews(): void {
   if (this.isValid()) {
    this.catchNew.emit(this.newNews);
    console.log('Noticia guardada:', this.newNews);
  

  // Reiniciar el formulario
    this.newNews = { title: "", url: "", texto: "", fecha: new Date(), tipo: "" };
  } else {
    console.log('El formulario contiene campos vacios.');
  }
}
}
