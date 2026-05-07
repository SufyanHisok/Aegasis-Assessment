import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('emits search text from onSearch', () => {
    const searchSpy = vi.fn();
    component.search.subscribe(searchSpy);

    component.onSearch('johanna');

    expect(searchSpy).toHaveBeenCalledWith('johanna');
  });
});
