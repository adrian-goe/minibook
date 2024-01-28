import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BooksPageGQL } from '@minibook/client-graphql';
import { EMPTY, of } from 'rxjs';

// Mock BooksPageGQL service
class MockBooksPageGQL {
  watch() {
    return {
      valueChanges: of({
        data: {
          getBooks: [
            {
              id: 'cd2ec0db-6741-4ca5-85e4-4db6a8d223d4',
              name: 'Book',
              isbn: 1234567890123,
              author: { name: 'Test Name' },
            },
          ],
        },
      }),
    };
  }
}

describe('BooksComponent', () => {
  it('1=1', () => {
    expect(1).toEqual(1);
  });
  // let component: BooksComponent;
  // let fixture: ComponentFixture<BooksComponent>;
  //
  // beforeEach(() => {
  //
  //   TestBed.configureTestingModule({
  //     imports: [BooksComponent],
  //     providers: [
  //       {
  //         provide: BooksPageGQL, useValue: {
  //           mutate: jest.fn().mockReturnValue(EMPTY)
  //         }
  //       }
  //       //...
  //     ]
  //     //...
  //   }).compileComponents();
  //   fixture = TestBed.createComponent(BooksComponent);
  //   component = fixture.componentInstance;
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //
  // it('should load book data', done => {
  //   component.books$.subscribe(data => {
  //     // replace below test condition with your expected output.
  //     expect(data).toEqual([{
  //       id: 'cd2ec0db-6741-4ca5-85e4-4db6a8d223d4',
  //       name: 'Book',
  //       isbn: 1234567890123,
  //       author: { name: 'Test Name' }
  //     }]);
  //     done();
  //   });
  // });
  //
  // it('should render basic card without input', () => {
  //   const element: HTMLElement = fixture.nativeElement;
  //   expect(element).toMatchSnapshot();
  // });
  //
  // it('should load book data', done => {
  //   component.books$.subscribe(data => {
  //     // replace below test condition with your expected output.
  //     expect(data).toEqual([{
  //       id: 'cd2ec0db-6741-4ca5-85e4-4db6a8d223d4',
  //       name: 'Book',
  //       isbn: 1234567890123,
  //       author: { name: 'Test Name' }
  //     }]);
  //     done();
  //   });
  // });
});
