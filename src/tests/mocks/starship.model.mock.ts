import { StarshipModel } from "src/app/models/starship.model";
import { StarshipInterfaceMock } from "./starship.interface.mock";
import { PilotService } from "src/app/services/pilot.service";
import { PilotInterfaceMock } from "./pilot.interface.mock";

const pilotService = new PilotService()
pilotService.pilots = [PilotInterfaceMock]

export const StartshipModelMock = new StarshipModel(1, StarshipInterfaceMock, pilotService)