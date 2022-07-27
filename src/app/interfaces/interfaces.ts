export interface Song {
    album_id: number;
    track: number;
    id: number;
    name: string
  }
  
  export interface Artist_songs {
    album: any;
    album_id: number;
    artist: any;
    id: number;
    name: string;
    track: number
  }
  
  export interface Album {
    id: number;
    name: string;
    artist_id: number;
    year_released: number
  }
  
  export interface Artist {
    id: number;
    name: string;
  }
