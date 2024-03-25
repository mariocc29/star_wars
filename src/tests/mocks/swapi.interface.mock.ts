import { PilotInterfaceMock } from "./pilot.interface.mock";
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