import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()


export class BookService {
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }
    getBooks() {
        return this.http.get<Book[]>('/assets/books.json');
    }
}