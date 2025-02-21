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


  onNewsClick(noticia: INews): void {
    const newsWindow = window.open('', '_blank');
  if (newsWindow) {
    newsWindow.document.write(`
      <html>
      <head>
        <title>${noticia.title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; }
          h1 { color: #333; }
          img { width: 100%; max-width: 600px; border-radius: 8px; }
          p { font-size: 16px; color: #555; }
          .news-date { font-weight: bold; color: darkgreen; }
          .news-type { font-weight: bold; color: darkred; }
        </style>
      </head>
      <body>
        <h1>${noticia.title}</h1>
        <p class="news-date">Fecha: ${new Date(noticia.fecha).toLocaleDateString()}</p>
        <p class="news-type">Tipo: ${noticia.tipo}</p>
        <img src="${noticia.url}" alt="${noticia.title}">
        <p>${noticia.texto}</p>
      </body>
      </html>
    `);
    newsWindow.document.close();
  }
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
