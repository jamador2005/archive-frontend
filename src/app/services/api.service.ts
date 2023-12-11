import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import{Posts} from '../models/interfaces'


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //private url = `${environment.api}/musics`;
  private url = `http://localhost:3000/posts`;

  constructor(private httpClient: HttpClient) {}

  getPosts(){
    return this.httpClient.get<Posts[]>(this.url)
  }
}
