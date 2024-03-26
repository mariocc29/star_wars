import { StarshipModel } from 'src/app/models/starship.model';
import { PilotService } from 'src/app/services/pilot.service';
import { PilotModelMock } from '../mocks/pilot.model.mock';
import { StarshipInterfaceMock } from '../mocks/starship.interface.mock';
import { PilotInterfaceMock } from '../mocks/pilot.interface.mock';

describe('StarshipModel', () => {
  let starshipModel: StarshipModel;
  let pilotServiceSpy: jasmine.SpyObj<PilotService>;

  beforeEach(() => {
    pilotServiceSpy = jasmine.createSpyObj('PilotService', ['findByUrl']);
    pilotServiceSpy.findByUrl.and.returnValue(PilotModelMock)

    starshipModel = new StarshipModel(pilotServiceSpy, 1, StarshipInterfaceMock);
  });

  it('should create an instance', () => {
    expect(starshipModel).toBeTruthy();
  });

  it('should correctly initialize properties', () => {
    expect(starshipModel.name).toEqual(StarshipInterfaceMock.name);
    expect(starshipModel.model).toEqual(StarshipInterfaceMock.model)
    expect(starshipModel.manufacturer).toEqual(StarshipInterfaceMock.manufacturer)
    expect(starshipModel.cargoCapacity).toEqual(StarshipInterfaceMock.cost_in_credits)
    expect(starshipModel.length).toEqual(StarshipInterfaceMock.length)
    expect(starshipModel.maxAtmospheringSpeed).toEqual(StarshipInterfaceMock.max_atmosphering_speed)
    expect(starshipModel.crew).toEqual(StarshipInterfaceMock.crew)
    expect(starshipModel.passengers).toEqual(StarshipInterfaceMock.passengers)
    expect(starshipModel.cargoCapacity).toEqual(StarshipInterfaceMock.cargo_capacity)
    expect(starshipModel.consumables).toEqual(StarshipInterfaceMock.consumables)
    expect(starshipModel.hyperdriveRating).toEqual(StarshipInterfaceMock.hyperdrive_rating)
    expect(starshipModel.mglt).toEqual(StarshipInterfaceMock.mglt)
    expect(starshipModel.starshipClass).toEqual(StarshipInterfaceMock.starship_class)
  });

  it('should build pilots array correctly', () => {
    expect(starshipModel.pilots.length).toEqual(1);
  
    let pilot = starshipModel.pilots[0]
    expect(pilot.name).toEqual(PilotInterfaceMock.name);
    expect(pilot.height).toEqual(PilotInterfaceMock.height)
    expect(pilot.mass).toEqual(PilotInterfaceMock.mass)
    expect(pilot.hairColor).toEqual(PilotInterfaceMock.hair_color)
    expect(pilot.skinColor).toEqual(PilotInterfaceMock.skin_color)
    expect(pilot.eyeColor).toEqual(PilotInterfaceMock.eye_color)
    expect(pilot.birthYear).toEqual(PilotInterfaceMock.birth_year)
    expect(pilot.gender).toEqual(PilotInterfaceMock.gender)
    expect(pilot.homeworldUrl).toEqual(PilotInterfaceMock.homeworld)
    expect(pilot.url).toEqual(PilotInterfaceMock.url)
  });
});
