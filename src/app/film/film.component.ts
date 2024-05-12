import { Component } from '@angular/core';
import { filter, map } from 'rxjs';
import { DataService } from '../services/data.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  films: any[] = [];
  isCollapsed = false;
  constructor(private dataService: DataService) { 
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
      this.films = data;
      console.log(data)});
  }
}
