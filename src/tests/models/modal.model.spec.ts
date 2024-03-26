import { ModalModel } from 'src/app/models/modal.model';
import { ModalInterface } from 'src/app/interfaces/modal.interface';

describe('ModalModel', () => {
  let modal: ModalModel;

  beforeEach(() => {
    modal = new ModalModel();
  });

  it('should create an instance', () => {
    expect(modal).toBeTruthy();
  });

  it('should have initial properties set correctly', () => {
    expect(modal.label).toEqual('');
    expect(modal.image).toBeNull();
    expect(modal.details).toEqual([]);
  });

  it('should set and get label property correctly', () => {
    modal.label = 'Test Label';
    expect(modal.label).toEqual('Test Label');
  });

  it('should set and get image property correctly', () => {
    modal.image = 'test-image.jpg';
    expect(modal.image).toEqual('test-image.jpg');
  });

  it('should set and get details property correctly', () => {
    const mockDetails: ModalInterface[] = [
      { label: 'Title 1', value: 'Description 1' },
      { label: 'Title 2', value: 'Description 2' }
    ];
    modal.details = mockDetails;
    expect(modal.details).toEqual(mockDetails);
  });
});
