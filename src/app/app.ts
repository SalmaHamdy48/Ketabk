import { Component, signal } from '@angular/core';

import { Header } from "./components/HeaderComponent/header";
import { SidebarComponent } from './components/sidebar-component/sidebar-component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { C } from '@angular/cdk/keycodes';
import { SubjectsComponent } from './components/subjects-component/subjects-component';


@Component({
  selector: 'app-root',
  imports: [Header,
    MatButtonModule,
    MatIconModule,
    SidebarComponent,
    RouterOutlet,
    CommonModule,
    SubjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ketabk');
}
