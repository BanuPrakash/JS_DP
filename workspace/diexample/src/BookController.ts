import { autoInjectable } from "tsyringe";
import BookService from "./BookService";

@autoInjectable()
export default class BookController {
    bookService: BookService;

    // Constructor DI
    constructor(bookService: BookService) {
        this.bookService = bookService;
    }

    getBooks() {
        return this.bookService.getBooks();
    }
}