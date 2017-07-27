import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	addArticle(title: HTMLInputElement, link: HTMLInputElement){
		console.log(`Adding title : ${title.value} with link : ${link.value}`);
	}
}
