import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { Posts } from '../app/models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id: string = '';
  title: string = '';
  author: string = '';

  instanceNumber:number=0;

  posts$ = new Observable<Posts[]>();

  constructor(private apiService: ApiService) {
    //console.log(this.apiService.getPosts())
  }

  buttonClick() {
    this.posts$ = this.apiService.getPosts();
    console.log(this.posts$);
  }

  clearValues() {
    this.posts$ = new Observable<Posts[]>();
  }

  openPrefsForm(){
  }
}
