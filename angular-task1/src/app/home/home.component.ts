import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  article_titles = ["The Flight", "The City", "The Island", "The Food"];
  article_contents = ["About the flight, lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quo adipisci porro! Repudiandae aspernatur libero animi quam? Impedit omnis eligendi, deleniti quidem perferendis assumenda cumque sapiente voluptatum non, a iusto.",
                      "About the city, lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quo adipisci porro! Repudiandae aspernatur libero animi quam? Impedit omnis eligendi, deleniti quidem perferendis assumenda cumque sapiente voluptatum non, a iusto.",
                      "About the island, lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quo adipisci porro! Repudiandae aspernatur libero animi quam? Impedit omnis eligendi, deleniti quidem perferendis assumenda cumque sapiente voluptatum non, a iusto.",
                      "About the food, lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quo adipisci porro! Repudiandae aspernatur libero animi quam? Impedit omnis eligendi, deleniti quidem perferendis assumenda cumque sapiente voluptatum non, a iusto."];
  article_title = this.article_titles[0];
  content = this.article_contents[0];

  chooseArticle(index: number){
    this.article_title = this.article_titles[index];
    this.content = this.article_contents[index];
  }
}
