import { Component, Inject, forwardRef, Host, OnInit } from '@angular/core';
import { DeveloperDetails } from './developer_details';
import { Developer } from './developer';

@Component({
  selector: 'dev-details-basic',
  styles: [
    `.avatar {
      border-radius: 150px;
    }`
  ],
  template: `
    <h2>{{dev.githubHandle | uppercase}}</h2>
    <img *ngIf="dev.avatarUrl == null" class="avatar" src="http://hippycanada.ca/wordpress/wp-content/uploads/2014/12/gravatar-60-grey.jpg" width="150">
    <img *ngIf="dev.avatarUrl != null" class="avatar" [src]="dev.avatarUrl" width="150">
  `
})
export class DeveloperBasicInfo implements OnInit {
  dev: Developer;
  constructor( @Inject(forwardRef(() => DeveloperDetails)) @Host() private parent: DeveloperDetails) { }

  ngOnInit() {
    this.dev = this.parent.dev;
  }
}