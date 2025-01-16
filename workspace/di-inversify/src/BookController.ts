import { inject, injectable } from 'inversify';
import BookService from './BookService';

@injectable()
export default class BookController {
    @inject("BookService")
    bookService: BookService;
  
  
    getBooks() {
      return this.bookService.getBooks();
    }
  
  }

  