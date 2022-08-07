import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: any;

  BookService: BookService;

  constructor( BookService: BookService ) { 
    this.BookService = BookService;
  }

  ngOnInit(): void {
    this.books = this.BookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

}
