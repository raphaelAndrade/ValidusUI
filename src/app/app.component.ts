import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/albums.service';
import { map } from 'rxjs';
import {Song, Artist_songs, Album, Artist} from './interfaces/interfaces'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit {
  title = 'music-db';
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: any = [3, 6, 9, 12];
  

  constructor(private service: AlbumService) { }
  allSongs: Song[] = [];
  dataBase: any;
  artist_songs: Artist_songs[] = [];

  getAllsongs(): void{
    this.service.getSongs()
      .subscribe(response => {
        this.allSongs = response;
        this.allSongs.map((song: Song) => {
          let album_id: number = song.album_id;
          this.service.getAlbums(album_id).subscribe(res => {
            let album: Album = res;
            let artist_id: number = album.artist_id;
            this.service.getArtist(artist_id).pipe(
              map((artist: Artist) => ({
                ...song,
                album,
                artist
              }))
            ).subscribe(res => {
              this.dataBase = res;
              this.artist_songs.push(this.dataBase)
            })
          })
        })
      });
  }

  ngOnInit() {
    this.getAllsongs();
  }
  onTableDataChange(event: any): void {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllsongs();
  }
}
