import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ui-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  debounce = input<number>(1000);
  placeholder = input<string>('Search...');
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  control = new FormControl(this.route.snapshot.queryParams['search'], { nonNullable: true });

  constructor() {
    this.control.valueChanges
      .pipe(
        takeUntilDestroyed(),
        debounceTime(this.debounce())
      )
      .subscribe(search => {
        console.log(search)
        this.router.navigate(
          [],
          { queryParams: { search: search ? search : null }, queryParamsHandling: 'merge' }
        );
      })
  }

  ngOnInit(): void {

  }



}
