import {FilmsModel} from '../../../films/shared/models/films.model';

export interface PeopleModel {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: FilmsModel[];
}
