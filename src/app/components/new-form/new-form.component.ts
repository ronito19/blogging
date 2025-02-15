import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-new-form',
  imports: [FormsModule],
  templateUrl: './new-form.component.html',
  styleUrl: './new-form.component.css'
})
export class NewFormComponent {
  newNews: INews = { title: "", url: "", reseña: "", fecha: new Date(), tipo: ""}
}
