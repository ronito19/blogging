import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/inews.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-form',
  imports: [FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {
  newNews: INews = { title: "", url: "", texto: "", fecha: new Date(), tipo: ""}
  @Output() catchNew: EventEmitter<INews> = new EventEmitter();

  
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
