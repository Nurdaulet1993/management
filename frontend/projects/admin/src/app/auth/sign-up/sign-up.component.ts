import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'core';
import { Router } from '@angular/router';
import { switchMap}  from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  signUp() {
    if (this.form.invalid) return;
    const { email, password, firstName, lastName } = this.form.getRawValue();
    this.authService.signUp(email, password, firstName, lastName)
      .pipe(switchMap(res => this.authService.signIn(email, password))) // TODO catch error on sign up
      .subscribe(() => this.router.navigate(['/']))
  }
}
