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
      this.texto += `<li class="">${news.title} 
                      - ${news.fecha} 
                      - ${news.tipo}
                    </li>`
    })
  }
}
