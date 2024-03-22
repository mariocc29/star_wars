import { StarshipModel } from "src/app/models/starship.model";
import { StarshipInterfaceMock } from "./starship.interface.mock";

const {
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  mglt,
  starship_class,
  pilots
} = StarshipInterfaceMock;

export const StartshipModelMock = new StarshipModel(
  1,
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  mglt,
  starship_class,
  pilots)