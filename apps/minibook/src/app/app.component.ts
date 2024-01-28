import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [ApolloModule, HttpClientModule, RouterModule, RouterLink],
  selector: 'minibook-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
