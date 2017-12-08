import {FilmsModel} from '../../../films/shared/models/films.model';

export interface PlanetsModel {
  name: String;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string[];
  surface_water: number;
  population: number;
  residents: string[];
  films: FilmsModel[];
  created: string;
  edited: string;
  url: string;
}
