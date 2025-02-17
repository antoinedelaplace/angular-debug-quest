import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);

  signOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth');
  }
}
