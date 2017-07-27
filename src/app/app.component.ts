import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];
	
	constructor(){
		this.articles = [ new Article("Angular 4", "http://angular.io", 3),
						new Article("Java", "http://angular.io", 2),
						new Article("Python", "http://angular.io", 1)
		];
	}
	
	addArticle(title: HTMLInputElement, link: HTMLInputElement){
		console.log(`Adding title : ${title.value} with link : ${link.value}`);
	}
}
