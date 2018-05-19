import { AuthService } from './../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error = '';
  redirectUrl: string;
  loading = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit() {
  }

  login(credentials) {
    this.loading = true;

    this.authService.login(credentials).subscribe(
      data => {
        this.authService.setSession(data.access_token);
        this.loading = false;
        this.navigateAfterSuccess();
      },
      err => {
        this.error = err.message;
        this.loading = false;
      }
    );
  }

  private navigateAfterSuccess() {
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      this.router.navigate(['/']);
    }
  }
}
