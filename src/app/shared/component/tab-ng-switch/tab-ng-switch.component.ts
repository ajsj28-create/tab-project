import { Component, OnInit } from '@angular/core';
import { IskillObj } from '../../model/types';

@Component({
  selector: 'app-tab-ng-switch',
  templateUrl: './tab-ng-switch.component.html',
  styleUrls: ['./tab-ng-switch.component.scss']
})
export class TabNgSwitchComponent implements OnInit {

  selectedSkill: string = 'HTML'

  skillsArray: IskillObj[] = [
    {
      skill: "HTML",
      skillInfo: "HTML (HyperText Markup Language) is the foundation of every web page. It structures the content using elements like headings, paragraphs, links, images, and forms. A strong understanding of semantic HTML helps improve accessibility, SEO, and maintainability of websites."
    },
    {
      skill: "CSS",
      skillInfo: "CSS (Cascading Style Sheets) is used to style, layout, and visually enhance web pages. It controls colors, typography, spacing, positioning, and responsive design. With modern features like Flexbox, Grid, and preprocessors such as SASS, CSS enables powerful and efficient UI development."
    },
    {
      skill: "JavaScript",
      skillInfo: "JavaScript is a dynamic, high-level programming language that brings interactivity and logic to web applications. It enables event handling, DOM manipulation, API integration, and asynchronous operations using promises and async/await. It forms the backbone of modern front-end development."
    },
    {
      skill: "Angular",
      skillInfo: "Angular is a robust front-end framework developed by Google, built with TypeScript. It provides tools for building scalable single-page applications with features like components, data binding, dependency injection, and routing. Angular promotes structured architecture and maintainable codebases."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
