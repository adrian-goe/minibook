import { isbn13Validator } from './isbn.validator';
import { FormControl, ValidatorFn } from '@angular/forms';

describe('isbn13Validator', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    control = new FormControl();
    validator = isbn13Validator('isbn13');
  });

  it('should return null when isbn13 is valid', () => {
    control.setValue({ isbn13: '9780306406157' });
    expect(validator(control)).toBeNull();
  });

  it('should return null when isbn13 is valid in another formate', () => {
    control.setValue({ isbn13: '978-0306406157' });
    expect(validator(control)).toBeNull();
  });

  it('should return an object with a property of isbn13 when isbn13 is invalid', () => {
    control.setValue({ isbn13: '1234567890123' });
    expect(validator(control)).toEqual({ isbn13: true });
  });

  it('should return null when isbn13 is not present', () => {
    control.setValue({});
    expect(validator(control)).toBeNull();
  });
});
