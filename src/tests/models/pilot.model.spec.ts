import { PilotModel } from 'src/app/models/pilot.model';
import { PilotInterfaceMock } from '../mocks/pilot.interface.mock';

describe('PilotModel', () => {
  let pilotModel: PilotModel

  beforeEach(() => {
    pilotModel = new PilotModel(PilotInterfaceMock);
  });

  it('should create an instance', () => {
    expect(pilotModel).toBeTruthy();
  });

  it('should correctly initialize properties', () => {
    expect(pilotModel.name).toEqual(PilotInterfaceMock.name);
    expect(pilotModel.height).toEqual(PilotInterfaceMock.height)
    expect(pilotModel.mass).toEqual(PilotInterfaceMock.mass)
    expect(pilotModel.hairColor).toEqual(PilotInterfaceMock.hair_color)
    expect(pilotModel.skinColor).toEqual(PilotInterfaceMock.skin_color)
    expect(pilotModel.eyeColor).toEqual(PilotInterfaceMock.eye_color)
    expect(pilotModel.birthYear).toEqual(PilotInterfaceMock.birth_year)
    expect(pilotModel.gender).toEqual(PilotInterfaceMock.gender)
    expect(pilotModel.homeworld).toEqual(PilotInterfaceMock.homeworld)
    expect(pilotModel.url).toEqual(PilotInterfaceMock.url)
  });
});
