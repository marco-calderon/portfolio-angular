import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostModel } from '../../../models/blog-post.model';
import { BlogPostsService } from '../../../services/blog-posts.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  post: BlogPostModel | null | undefined = null;

  constructor(private posts: BlogPostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post = this.posts.getPost(this.route.snapshot.params?.id);
  }

}
