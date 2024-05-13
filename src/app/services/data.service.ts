import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';


export interface Film {
  name: string,
  year: number,
  sumSbor:number,
  genre: string,
  country: string,
  time: string,
  director: string,
  description: string,
  actors:  Array<string>,
  poster: string,
  trailer: string,
  videoUrl: SafeResourceUrl
}


@Injectable({
  /**К классу применяется декоратор @Injectable, 
   * который гарантирует, что встроенный механизм внедрения зависимостей сможет создать объект этого класса и передать его в качестве зависимости в другой объект (в другой сервис или компонент). */
  providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) { }//Для отправки запросов сервис получает объект HttpClient.

    getExampleData() : Observable<Array<Film>> {
        return this.http.get<Array<Film>>('assets/data1.json')//метод http.get() возвращает объект Observable<Object>
          .pipe(
            catchError(err => {//Для перехвата ошибок, которые могут возникнуть при выполнении запроса
                console.log(err);//выводим в логи ошибку
                return of([]);//Метод of принимает на вход любое количество аргументов и возвращает готовый экземпляр Observable. После подписки он испустит полученные значения и завершится:
            })
          )
      }

      addFilm(data: any): void {
        const data1 = {
          film: data
        };
        console.log(data1,JSON.stringify(data1));
        this.http.put('http://localhost:4200/assets/data1.json', data1)

        // .subscribe(() => {
        //   console.log('Данные успешно записаны в data1.json');
        // }, (error) => {
        //   console.error('Ошибка при записи данных в data1.json', error);
        // });
       // Перезаписываем файл с обновленными данными
        
      }
    

}

/**
 * Метод pipe позволяет применять несколько операторов последовательно к данным полученным из запроса. 
 * Для взаимодействия с сервером и отправки запросов по протоколу http применяется класс HttpClient. Этот класс определяет ряд методов для отправки различного рода запросов: GET, POST, PUT, DELETE. Данный класс построен поверх стандартного объекта в JavaScript - XMLHttpRequest.
 */