import { FormControl } from "@angular/forms";
import { Data } from "@angular/router";


  export interface Film{
        name: FormControl <string>,
        year: FormControl<number>,
        sumSbor: FormControl<number>,
        genre: FormControl<string>,
        country: FormControl<string|null>,
        time: FormControl<string>,
        director: FormControl<string>,
        description: FormControl<string|null>,
        actors: FormControl<string[]>,
        poster: FormControl<string|null>,
  }