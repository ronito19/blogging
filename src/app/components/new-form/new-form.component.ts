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

  // Mensaje de error
  errorMessage: string = "";


  saveNews(): void {
    // Validacion con un if
    if (!this.newNews.title || !this.newNews.url || !this.newNews.texto || !this.newNews.fecha || !this.newNews.tipo) {
      this.errorMessage = "TODOS LOS CAMPOS SON OBLIGATORIOS";
    } else {
      this.catchNew.emit(this.newNews);
      console.log('Noticia guardada:', this.newNews)
    
    
      this.newNews = { title: "", url: "", texto: "", fecha: new Date(), tipo: "" };
      this.errorMessage = "";
    }    
  }
}
