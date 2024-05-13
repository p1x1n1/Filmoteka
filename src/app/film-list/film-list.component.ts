import { Component, signal } from '@angular/core';
import { Film } from '../film';
import { DataService } from '../services/data.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent {
  showForm = signal<boolean>(false);
  films: any[] = [];
  receiveTaskData(film: any): void {
    this.films.push(film);
    this.dataService.addFilm(this.films); 
    this.showForm.set(false);
    console.log(this.showForm);
  }
  constructor(private dataService: DataService) { 
  }
  click(){
    this.showForm.set(true);
  }
  ngOnInit(): void {
    // Здесь вы будете получать данные задач из базы данных или приложения
    this.showForm.set(false);
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
      console.log(data,this.films);
    });
  }
}
