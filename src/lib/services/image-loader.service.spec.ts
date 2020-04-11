import { TestBed } from '@angular/core/testing';

import { ImageLoaderService } from './image-loader.service';

describe('ImageLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageLoaderService = TestBed.get(ImageLoaderService);
    expect(service).toBeTruthy();
  });
});
