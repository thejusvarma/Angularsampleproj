import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/post.model';
import { PostsService } from "../posts.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  onAddPost(form: NgForm){
    if(form.invalid)
    {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
  };


  constructor(public postsService: PostsService) {
   }

  ngOnInit(): void {

  }

}
