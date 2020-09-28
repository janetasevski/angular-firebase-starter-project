import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './../products/shared/product.service';
import { Product } from '../products/shared/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  topProducts$: Observable<Product[]>;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.topProducts$ = this.ps.getTopProducts(4);
  }


}
