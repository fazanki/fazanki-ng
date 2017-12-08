import {FilmsModel} from '../../../films/shared/models/films.model';

export interface SpeciesModel {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string[];
  hair_colors: string;
  eye_colors: string[];
  average_lifespan: number;
  homeworld: string;
  language: string;
  people: string[];
  films: FilmsModel[];
  created: string;
  edited: string;
  url: string;
}
