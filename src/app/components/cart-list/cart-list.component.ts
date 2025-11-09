import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  carts: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCarts();
  }

  fetchCarts() {
    this.loading = true;
    this.http.get<any>('https://dummyjson.com/carts').subscribe({
      next: (res) => {
        this.carts = res.carts;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load carts';
        this.loading = false;
      }
    });
  }
}
