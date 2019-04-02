import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.sass']
})
export class PostListItemComponent implements OnInit {
  
  @Input() item: {title: string, content: string, loveIts: number, created_at: Date};

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.item.loveIts --;
  }

  onLoveIt() {
    this.item.loveIts ++;
  }
}
