import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: SkillModel[] = [
    {
      id: 'asd1',
      title: 'Languages',
      content: 'Python, C#, Javascript, Java, TypeScript, C, C++, Ruby, SQL, T-SQL',
    },
    {
      id: 'asd2',
      title: 'Front end / Mobile',
      content: 'React, Angular 2+, Bootstrap, HTML5/CSS3/JavaScript, jQuery, Ionic Framework, React Native',
    },
    {
      id: 'asd3',
      title: 'Frameworks',
      content: 'Django, Node.js, ASP.NET Core, ASP.NET, Spring Framework, Nest.js, Express.js, Ruby on Rails, Electron, Material UI',
    },
    {
      id: 'asd4',
      title: 'Libraries / APIs',
      content: 'Redux, NgRx, RxJs, MapBox, OpenLayers, Chart.js, Pusher, S3, EC2, WebSockets, Selenium, Puppeteer, PayPal, Stripe, GraphQL',
    },
    {
      id: 'asd5',
      title: 'Services',
      content: 'Heroku, AWS, Digital Ocean, Vercel, Serverless, Cloudinary',
    },
    {
      id: 'asd6',
      title: 'Storage',
      content: 'MySQL, SQL Server, PostgreSQL, MongoDB, Redis, CouchDB.',
    },
    {
      id: 'asd7',
      title: 'Paradigms',
      content: 'Model View Controller, MVVM, Object Oriented Programming, Agile Software development, Functional Programming, Test Driven Development, REST',
    },
    {
      id: 'asd8',
      title: 'Tools',
      content: 'Git, Nginx, GUnicorn, Linux, Subversion, Visual Studio, Visual Studio Code, GitHub, GitLab, Bitbucket, Jira, Trello, Slack, Asana.',
    },
    {
      id: 'asd9',
      title: 'Platforms',
      content: 'Windows, Linux, MacOs, Docker, Kubernetes',
    },
    {
      id: 'asd10',
      title: 'Other',
      content: 'Bash scripting, Documentation, Machine Learning',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
