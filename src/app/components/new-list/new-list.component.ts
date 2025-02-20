import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-new-list',
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {
  @Input() news: INews[] = [];
  texto: string = ""

  ngOnChanges() {
    this.texto = "";
    this.news.forEach(news => {
      const fecha = new Date(news.fecha);
      const fechaFormat = fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      this.texto += `<li class="">Titulo: ${news.title} 
                      - Fecha: ${fechaFormat} 
                      - Tipo: ${news.tipo}
                    </li>`
    })
  }
}
