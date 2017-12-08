import {FilmsModel} from '../../../films/shared/models/films.model';

export interface StarShipsModel {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: string;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: string[];
  films: FilmsModel[];
  created: string;
  edited: string;
  url: string;
}
