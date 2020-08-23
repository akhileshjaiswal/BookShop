import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class MainService {
    main_book_dir = [];
    constructor(private http: HttpClient) { }


    getURLData(book_name: string) {
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${book_name}`);
    }

    getMainData(data) {
        if (data.totalItems == 0) {
            return [];
        } else {
            data.items.forEach((book) => {
                let name = this.getTrim(book.volumeInfo.title);
                let publisher = book.volumeInfo.publisher;
                publisher = publisher.substring(0, 18) + "...";
                this.main_book_dir.push({
                    name: name,
                    id: book.id,
                    title: book.volumeInfo.title,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    publisher: publisher,
                    publisher_title: book.volumeInfo.publisher
                });
            });
            return this.main_book_dir;
        }
    }

    getTrim(name) {
        if (name.length < 20) {
            return name;
        } else {
            return name.substring(0, 20) + "...";
        }
    }
}