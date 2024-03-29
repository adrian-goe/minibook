import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = { name: 'test book name', isbn: '978-3522202107' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render basic card without input', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element).toMatchSnapshot();
  });
});
