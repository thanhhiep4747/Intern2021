import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles = [
    {
      id: 0,
      title: 'The Flight',
      content: ` Let’s walk through a 5-step process for building a paragraph that
    illustrates a point in an argument. For each step there is an
    explanation and example. Our example paragraph will be about human
    misconceptions of piranhas.Let’s walk through a 5-step process for
    building a paragraph that illustrates a point in an argument. For each
    step there is an explanation and example. Our example paragraph will be
    about human misconceptions of piranhas.Let’s walk through a 5-step
    process for building a paragraph that illustrates a point in an
    argument. For each step there is an explanation and example. Our example
    paragraph will be about human misconceptions of piranhas.`,
    },
    {
      id: 1,
      title: 'The City',
      content: ` Let’s walk through a 5-step process for building a paragraph that
    illustrates a point in an argument. For each step there is an
    explanation and example. Our example paragraph will be about human
    misconceptions of piranhas.Let’s walk through a 5-step process for
    building a paragraph that illustrates a point in an argument.
    argument. For each step there is an explanation and example. Our example
    paragraph will be about human misconceptions of piranhas.`,
    },
    {
      id: 2,
      title: 'The Island',
      content: ` Let’s walk through a 5-step process for building a paragraph that
    illustrates a point in an argument. For each step there is an
    explanation and example. Our example paragraph will be about human
    misconceptions of piranhas.Let’s walk through a 5-step process for
    building a paragraph that illustrates a point in an argument. `,
    },
    {
      id: 3,
      title: 'The Food',
      content: ` Let’s walk through a 5-step process for building a paragraph that
    illustrates a point in an argument. For each step there is an
    explanation and example. Our example paragraph will be about human
    misconceptions of piranhas.Let’s walk through a 5-step process for
    building a paragraph that illustrates a point in an argument. For each
    step there is an explanation and example. Our example paragraph will be
    about human misconceptions of piranhas.Let’s walk through a 5-step
    process for building a paragraph that illustrates a point in an
    argument. For each step there is an explanation and example. Our example
    paragraph will be about human misconceptions of piranhas.`,
    },
  ];
  currentArticle: any;

  constructor() {}

  ngOnInit(): void {
    this.currentArticle = this.articles[0];
  }

  getArticle(articleId: number) {
    this.currentArticle = this.articles[articleId];
  }
}
