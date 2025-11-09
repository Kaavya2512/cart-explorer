import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DiscountPipe } from '../../pipes/discount-pipe';  // ✅ Add this line

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, DiscountPipe],  // ✅ Add here
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart: any;
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fetchCartDetails(id);
  }

  fetchCartDetails(id: string | null) {
    if (!id) return;
    this.loading = true;
    this.http.get<any>(`https://dummyjson.com/carts/${id}`).subscribe({
      next: (res) => {
        this.cart = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load cart details';
        this.loading = false;
      }
    });
  }
}
