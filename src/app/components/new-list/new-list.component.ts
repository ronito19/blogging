import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-list',
  imports: [CommonModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})

  

export class NewListComponent {
  @Input() news: INews[] = [];
  @Output() newsClicked: EventEmitter<INews> = new EventEmitter();
  texto: string = ""


  onNewsClick(news: INews): void {
    this.newsClicked.emit(news);
  }

  ngOnChanges() {
    this.texto = "";
    this.news.forEach(news => {
      const fecha = new Date(news.fecha);
      const fechaFormat = fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      this.texto += `
        <li class="">
        Titulo: <span class="news-title"> ${news.title} </span> 
        -----  Fecha: <span class="news-date"> ${fechaFormat} </span>
        -----  Tipo de Noticia: <span class="news-type"> ${news.tipo} </span>
        </li>`;
    });

    
  }
}
