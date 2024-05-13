import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Film } from '../film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent {
  @Output() SubmitTask = new EventEmitter<any>();
  // @Input() numberTask: number = 1;
  

  actors : string[] = [''];
  filmForm = new FormGroup<Film>({
      name: new FormControl('',{nonNullable: true}),
      year: new FormControl(0 ,{nonNullable: true}),
      sumSbor: new FormControl(0,{nonNullable: true} ),
      genre: new FormControl('' ,{nonNullable: true}),
      country: new FormControl('' ,),
      time: new FormControl('' ,{nonNullable: true}),
      description: new FormControl(''),
      director: new FormControl('', {nonNullable: true}),
      actors: new FormControl([''], {nonNullable: true}),
      poster: new FormControl('', {nonNullable: true}),
      trailer: new FormControl('', {nonNullable: true}),
      videoUrl: new FormControl('', ),
  });
  constructor(private sanitizer: DomSanitizer) { 

  }
  genre = {
    "Драма":"Драма",
    "Ужасы":"Ужасы",
    "Комедии": "Комедии",
    "Мультфильмы" : "Мультфильмы",
    "Фантастика" : "Фантастика" ,
    "Триллеры" : "Триллеры",
    "Боевики" : "Боевики",
    "Мелодрамы" : "Мелодрамы",
    "Детективы" : "Детективы" ,
  };
  director = {
    "Джеймс кемерон":"Джеймс кемерон",
    "Уэс Андерсон":"Уэс Андерсон",
    "Альфонсо Куарон" : "Альфонсо Куарон",
    "Райан Куглер" :"Райан Куглер",
    "Пол Томас Андерсон" : "Пол Томас Андерсон",
    "Дени Вильнёв" : "Дени Вильнёв",
    "Пон Чжун Хо" : "Пон Чжун Хо",
    "Грета Гервиг" : "Грета Гервиг",
    "Квентин Тарантино" : "Квентин Тарантино",
    "Кристофер Нолан" : "Кристофер Нолан",
    "Мартин Скорсезе" : "Мартин Скорсезе",
    "Стэнли Кубрик" : "Стэнли Кубрик",
    "Оливье Накаш" : "Оливье Накаш",
    "Андрес Мускетти":"Андрес Мускетти",

  };

  addActor() {
    console.log("Add Actor");
    this.actors.push('');
    this.filmForm.patchValue({ actors: this.actors });
  }
  onActorChange(event: any, i: number) {
    console.log(event.target.value);
    this.actors[i] = event.target.value;
    this.filmForm.patchValue({ actors: this.actors });
  }

  ngOnInit(): void {
    
  }
  OnSubmit ()  {
    console.log("Push Form");
    if (this.filmForm.valid) {
    let film = this.filmForm.getRawValue();
    film.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(film.trailer)
    console.log(film);
    this.SubmitTask.emit(film);
    }
  }
}
