import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() MyNews: INews[] = [];
  news: INews[] = this.MyNews;

  

  ngOnInit() {
    console.log(this.MyNews)
  }
  
}
