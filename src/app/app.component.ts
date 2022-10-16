import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Angular-Template';

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isAuth().subscribe((data) => {
      console.log(data);
    });
  }
}
