import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() MyNews: INews[] = [];
  news: INews[] = this.MyNews;


  ngOnInit() {
    this.news = [...this.MyNews];
    //console.log(this.MyNews);
  }
  
}
