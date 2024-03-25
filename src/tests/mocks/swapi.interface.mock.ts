import { PilotInterfaceMock } from "./pilot.interface.mock";
import { PlanetInterfaceMock } from "./planet.interface.mock";
import { StarshipInterfaceMock } from "./starship.interface.mock";

export const SwapiStarshipMock = {
  count: 1,
  next: null,
  results: [StarshipInterfaceMock]
}

export const SwapiPilotMock = {
  count: 1,
  next: null,
  results: [PilotInterfaceMock]
}

export const SwapiPlanetMock = {
  count: 1,
  next: null,
  results: [PlanetInterfaceMock]
}