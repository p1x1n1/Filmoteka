import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Film } from '../services/data.service';
import { filter, map } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  id: number;
  film : Film = {
    name: "",
    year: 0,
    sumSbor:0,
    genre: "",
    country: "",
    time: "",
    director: "",
    description: "",
    actors:  [],
    poster: "",
    trailer: "",
    videoUrl:"",
  };
  videoUrl!: SafeResourceUrl;
  constructor(private activateRoute: ActivatedRoute,private dataService: DataService,private sanitizer: DomSanitizer){
    this.id = activateRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.dataService.getExampleData()
    .pipe(
       // пропускаем только не нулевые объекты
      filter(d => d.length !== 0),//rxjs
      map((data:any) => {
        let films = data["film"];//используя данный ключ, мы достаем нужные данные из ответа сервера:
        return films;
      }
      ),
    )
    .subscribe((data: any) => {
      this.film = data[this.id];
      console.log(this.film)
      const trailer = this.film.trailer;
      // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/DOlTmIhEsg0")
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(trailer);
      console.log(trailer,this.film.trailer);
    });
  }
  
}
