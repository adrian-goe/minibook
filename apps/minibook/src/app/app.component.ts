import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [ApolloModule, HttpClientModule, RouterModule],
  selector: 'minibook-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
