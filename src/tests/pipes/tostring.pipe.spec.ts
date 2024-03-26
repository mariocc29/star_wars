import { TostringPipe } from 'src/app/pipes/tostring.pipe';

describe('TostringPipe', () => {
  let pipe: TostringPipe;

  beforeEach(() => {
    pipe = new TostringPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms a single digit number to a string with leading zero', () => {
    const result = pipe.transform(5);
    expect(result).toEqual('05');
  });

  it('transforms a double digit number to a string without leading zero', () => {
    const result = pipe.transform(15);
    expect(result).toEqual('15');
  });
});
