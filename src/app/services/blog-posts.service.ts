import { Injectable } from '@angular/core';
import { BlogPostModel } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private posts: BlogPostModel[] = [
    {
      id: 'dollar-insights',
      title: 'Dollar Insights',
      content: 'https://raw.githubusercontent.com/flexocarpius/portfolio-angular/master/src/app/pages/blog/contents/dollar-insights.md',
      created: new Date(),
      modified: new Date(),
      author: 'Marco Calderon',
      tags: ['Django', 'Ionic Framework']
    }
  ];

  constructor() { }

  getPost(id: string) {
    return this.posts.find(p => p.id === id);
  }
}
