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

  imagePreview: string | ArrayBuffer | null = null;
  // Funcion para imagen seleccionada
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader(); // Crear lector de archivos
      reader.onload = () => {
        this.imagePreview = reader.result; // Mostrar imagen en vista previa
        this.newNews.url = reader.result as string; // Guardar imagen
      };
      reader.readAsDataURL(file); // Leer el archivo
    }
  }

  // Funcion para enviar los datos del formulario
  onSubmit(): void {
    console.log(this.newNews)
  }


  saveNews() {
    //console.log(this.newNews)
    this.catchNew.emit(this.newNews);
    this.newNews = { title: "", url: "", texto: "", fecha: new Date(), tipo: "" }
  }
}
