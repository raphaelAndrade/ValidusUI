import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'http://localhost:5001/songs?&_limit=93';
  auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', `Bearer ${this.auth_token}`)
   
  constructor(private httpClient: HttpClient) { }
  
  getSongs(): Observable<any> {
    return this.httpClient.get(this.url,{ headers: this.headers })
  }

  getAlbums(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:5001/albums/${id}`,{ headers: this.headers })
  }

  getArtist(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:5001/artists/${id}`,{ headers: this.headers })
  }
}

