import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'core';
import { switchMap } from 'rxjs';

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
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required]
  });

  signUp() {
    if (this.form.invalid) return;
    const { email, password, name } = this.form.getRawValue();
    this.authService.signUp(email, password, name)
      .pipe(switchMap(res => this.authService.signIn(email, password))) // TODO catch error on sign up
      .subscribe((res) => {
        localStorage.setItem('accessToken', res.access_token);
      })
  }
}
