import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ApolloModule } from 'apollo-angular';

@Component({
  standalone: true,
  imports: [ApolloModule, NxWelcomeComponent, RouterModule],
  selector: 'minibook-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'minibook';
}
