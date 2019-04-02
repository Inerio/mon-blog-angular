import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'First post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan felis at arcu pulvinar consequat. Cras lectus tortor, ultrices vel lacus sed, venenatis scelerisque dui. Vestibulum vel rhoncus turpis. Nunc eu commodo felis. In gravida a nunc at placerat. Fusce et nunc faucibus, laoreet diam et, facilisis turpis.',
      loveIts: 0,
      created_at: new Date()
    },{
      title: 'Second post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan felis at arcu pulvinar consequat. Cras lectus tortor, ultrices vel lacus sed, venenatis scelerisque dui. Vestibulum vel rhoncus turpis. Nunc eu commodo felis. In gravida a nunc at placerat. Fusce et nunc faucibus, laoreet diam et, facilisis turpis.',
      loveIts: 0,
      created_at: new Date('2018-10-14')
    },{
      title: 'Third post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan felis at arcu pulvinar consequat. Cras lectus tortor, ultrices vel lacus sed, venenatis scelerisque dui. Vestibulum vel rhoncus turpis. Nunc eu commodo felis. In gravida a nunc at placerat. Fusce et nunc faucibus, laoreet diam et, facilisis turpis.',
      loveIts: 0,
      created_at: new Date('2018-10-10')
    },{
      title: 'Fourth post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan felis at arcu pulvinar consequat. Cras lectus tortor, ultrices vel lacus sed, venenatis scelerisque dui. Vestibulum vel rhoncus turpis. Nunc eu commodo felis. In gravida a nunc at placerat. Fusce et nunc faucibus, laoreet diam et, facilisis turpis.',
      loveIts: 0,
      created_at: new Date('2018-10-06')
    }
  ] 
}
