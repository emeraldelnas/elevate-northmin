import { ImgLazyLoadDirective } from './img-lazy-load.directive';

describe('ImgLazyLoadDirective', () => {

  const elMock = {
    nativeElement: document.createElement('div')
  };

  it('should create an instance', () => {
    const directive = new ImgLazyLoadDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
