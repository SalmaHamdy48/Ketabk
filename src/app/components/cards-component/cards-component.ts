import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor , NgClass } from '@angular/common';

interface Subject {
  name: string;
  image: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-cards-component',
  standalone: true,
  imports: [HttpClientModule, NgFor , NgClass],
  templateUrl: './cards-component.html',
  styleUrls: ['./cards-component.css']
})
export class CardsComponent implements OnInit {
  subjects: Subject[] = [];

  // Pagination
  currentPage = 1;
  itemsPerPage = 4;
  totalPages = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Subject[]>('assets/subject.json')
      .subscribe({
        next: data => {
          this.subjects = data;
          this.totalPages = Math.ceil(this.subjects.length / this.itemsPerPage);
        },
        error: err => console.error('Failed to load subjects.json', err)
      });
  }

  get pagedSubjects(): Subject[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.subjects.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}
